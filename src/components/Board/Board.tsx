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

import { ITask } from "../../actions";

interface BoardProps {
  tasks: any[];
  tab: number;
}

const Board = ({ tasks, tab }: BoardProps) => {
  console.log("board", tasks);

  const dispatch = useDispatch();
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);

  const onCheck = (id: string) => {
    dispatch({ type: "COMPLETE_TODO", payload: id });
  };

  console.log("tab", tab);

  const renderScreens = () => {
    if (tab === 1) {
      return <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        console.log("render", item);
        
          return (
            item.complete &&
          <Text>
              {item.task.title}
          </Text>
            
        
            );
          }
        }
        />
    } else {
        return <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        console.log("render", item);
        
          return (
            (item.complete===false)?
          <Text>
              {item.task.title}
          </Text>
          :<></>
            
        
            );
          }
        }
        />
    }
  };

  return (
    <View>
      {tab==0 && <FlatList
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
      />}
      {tab>0 && renderScreens()}
    </View>
  );
};

export default Board;
