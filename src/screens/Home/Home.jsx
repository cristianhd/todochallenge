import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import Board from "../../components/Board/Board";
import NavBar from "../../components/NavBar/NavBar";

const Home = ({ navigation }) => {
  const data = useSelector((state) => state);
  console.log("Home", data.taskReducer.tab);

  return (
    <View>
      <NavBar></NavBar>
      <Board tasks={data.taskReducer.tasks} tab={data.taskReducer.tab} />
      <Button title="Add a Task" onPress={() => navigation.navigate("Form")} />
    </View>
  );
};

export default Home;
