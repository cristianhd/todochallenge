import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";


const Home = ({navigation})=>{

  const data = useSelector(state => state)

  console.log("data",data.taskReducer[1]);

    return (
        <View>
           <NavBar></NavBar>
           
           <Button
        title="Add a Task"
        onPress={() => navigation.navigate('Form')}
      />
        </View>
        )
}

export default Home;