// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import NavBar from "./src/components/NavBar/NavBar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from './src/components/Form/Form';
import Home from './src/components/Home/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Form" component={Form} />
          </Stack.Navigator>
      </NavigationContainer>
      
 
   
  );
}

