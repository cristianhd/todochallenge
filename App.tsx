// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import NavBar from "./src/components/NavBar/NavBar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from './src/components/Form/Form';
import Home from './src/screens/Home/Home';
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <Provider store={store}>

      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Form" component={Form} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
      
 
   
  );
}

