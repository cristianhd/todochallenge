import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  GestureResponderEvent,
  TextInput,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useDispatch } from "react-redux";
import { Container, StyleText, Void, WrapperList } from "./Styled";
import { FontAwesome5 } from "@expo/vector-icons";

interface BoardProps {
  tasks: any[];
  tab: number;
}

const Board = ({ tasks, tab }: BoardProps) => {
  console.log("board");

  const dispatch = useDispatch();
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);

  const onCheck = (id: string) => {
    dispatch({ type: "COMPLETE_TODO", payload: id });
  };

  console.log("tab", tab);

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
              console.log("render", item);

              return item.complete && (
                <WrapperList>

                  <FontAwesome5 name="check-circle" size={23} color="green" />
                  <StyleText style={{ fontFamily: "Lexend-Regular", fontSize: 20 }}>{item.task.title}</StyleText>
                </WrapperList>
              )
            }}
          />
        );
      case 2:
        return (
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              console.log("render", item);

              return item.complete === false ? (
                <WrapperList>

                  <FontAwesome5 name="times-circle" size={23} color="red" />
                  <StyleText style={{ fontFamily: "Lexend-Regular", fontSize: 20 }}>{item.task.title}</StyleText>
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
