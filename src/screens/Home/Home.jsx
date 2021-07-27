import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import Board from "../Board/Board";
import NavBar from "../../components/NavBar/NavBar";
import { WrapperButton } from "./Styled";
import PressableButton from "../../components/Button";

const Home = ({ navigation }) => {
  const data = useSelector((state) => state);
  console.log("Home", data.taskReducer.tab);

  return (
    <View>
      <NavBar></NavBar>
      <Board tasks={data.taskReducer.tasks} tab={data.taskReducer.tab} />
      <WrapperButton>
        <PressableButton
          title="Add a task"
          onPress={() => navigation.navigate("Form")}
          color="#5dbc75"
        />
      </WrapperButton>
    </View>
  );
};

export default Home;
