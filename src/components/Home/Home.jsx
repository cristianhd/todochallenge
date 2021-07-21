import React from "react";
import { View, Text, Button } from "react-native";
import NavBar from "../NavBar/NavBar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({navigation})=>{
    return (
        <View>
           <NavBar></NavBar>
           <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Form')}
      />
        </View>
        )
}

export default Home;