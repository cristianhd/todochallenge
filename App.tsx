// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import NavBar from "./src/components/NavBar";

export default function App() {
  return (
    <View>
      <NavBar></NavBar>
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

