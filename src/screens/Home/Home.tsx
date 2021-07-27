import React from "react";
import { useSelector } from "react-redux";
import Board from "../Board/Board";
import NavBar from "../../components/NavBar/NavBar";
import { Container, WrapperButton } from "./Styled";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import { taskState } from "../../reducer/taskReducer";

interface Idata {
  taskReducer: taskState;
}

const Home = () => {
  const data = useSelector((state: Idata) => state);
  const{tasks,tab} = data.taskReducer
  const { navigate } = useNavigation();

  return (
    <Container>
      <NavBar />
      <Board tasks={tasks} tab={tab} />
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
