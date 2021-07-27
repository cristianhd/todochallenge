import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import Board from "../Board/Board";
import NavBar from "../../components/NavBar/NavBar";
import { Container, WrapperButton } from "./Styled";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import { taskState } from "../../reducer/taskReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistedReducer } from "../../store";

interface Idata{
  taskReducer:taskState
}

const Home = () => {
  const data = useSelector((state:Idata) => state);
  console.log("Home", data);
  const { navigate } = useNavigation();
  
  
  
  return (
    <Container>
      <NavBar/>
      <Board tasks={data.taskReducer.tasks} tab={data.taskReducer.tab} />
      <WrapperButton>
        <ButtonPrimary
          title="Add a task"
          onPress={() => navigate("Add task")}
          
        />
      </WrapperButton>
    </Container>
  );
};

export default Home;
