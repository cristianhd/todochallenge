import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  GestureResponderEvent,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useDispatch } from "react-redux";
import { Container, Void } from "./Styled";

interface BoardProps {
  tasks: any[];
  tab: number;
}

const Board = ({ tasks, tab }: BoardProps) => {
  console.log("board", 0 === true);

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
                title={item.task.title}
                checked={item.complete}
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

            return item.complete && <Text>{item.task.title}</Text>;
          }}
        />
        );
      case 2:
        return (<FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            console.log("render", item);

            return item.complete === false ? (
              <Text>{item.task.title}</Text>
            ) : (
              <></>
            );
          }}
        />);

      default:
        break;
    }

    if (tab === 1) {
      return (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            console.log("render", item);

            return item.complete && <Text>{item.task.title}</Text>;
          }}
        />
      );
    } else {
      return (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            console.log("render", item);

            return item.complete === false ? (
              <Text>{item.task.title}</Text>
            ) : (
              <></>
            );
          }}
        />
      );
    }
  };

  return (
    <Container>
      
      {tasks.length ? renderScreens():<Void></Void>}
    </Container>
  );
};

export default Board;
