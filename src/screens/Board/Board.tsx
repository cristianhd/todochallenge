import React, { useState } from "react";
import { FlatList } from "react-native";
import { CheckBox } from "react-native-elements";
import { useDispatch } from "react-redux";
import { Container, StyleText, Void, WrapperList } from "./Styled";
import { FontAwesome5 } from "@expo/vector-icons";
import { COMPLETE_TODO } from "../../actions";

interface BoardProps {
  tasks: any[];
  tab: number;
}

const Board = ({ tasks, tab }: BoardProps) => {
  const dispatch = useDispatch();

  const onCheck = (id: string) => {
    dispatch({ type: COMPLETE_TODO, payload: id });
  };

  const renderScreens = () => {
    switch (tab) {
      case 0:
        return (
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <CheckBox
                  textStyle={{ fontFamily: "Lexend-SemiBold", fontSize: 20 }}
                  title={item.task.title}
                  checked={item.complete}
                  checkedColor="green"
                  iconType="font-awesome"
                  onPress={() => onCheck(item.task.id)}
                />
              );
            }}
          />
        );
      case 1:
        return (
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                item.complete && (
                  <WrapperList>
                    <FontAwesome5 name="check-circle" size={23} color="green" />
                    <StyleText
                      style={{ fontFamily: "Lexend-Regular", fontSize: 20 }}
                    >
                      {item.task.title}
                    </StyleText>
                  </WrapperList>
                )
              );
            }}
          />
        );
      case 2:
        return (
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return item.complete === false ? (
                <WrapperList>
                  <FontAwesome5 name="times-circle" size={23} color="red" />
                  <StyleText
                    style={{ fontFamily: "Lexend-Regular", fontSize: 20 }}
                  >
                    {item.task.title}
                  </StyleText>
                </WrapperList>
              ) : (
                <></>
              );
            }}
          />
        );

      default:
        break;
    }
  };

  return (
    <Container>{tasks.length ? renderScreens() : <Void></Void>}</Container>
  );
};

export default Board;
