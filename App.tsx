import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "./src/screens/Form/Form";
import Home from "./src/screens/Home/Home";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import * as Font from "expo-font";
import { useEffect } from "react";
import { useState } from "react";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createStackNavigator();

export default function App() {
  const [loadFonts, setLoadFonts] = useState<Boolean>(false);

  const loadAsync = async (): Promise<any> => {
    try {
      await Font.loadAsync({
        "Lexend-Regular": require("./assets/Fonts/Lexend-Regular.ttf"),
        "Lexend-SemiBold": require("./assets/Fonts/Lexend-SemiBold.ttf"),
        "Lexend-Medium": require("./assets/Fonts/Lexend-Medium.ttf"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const setFonts = async (): Promise<any> => {
      await loadAsync();
      setLoadFonts(true);
    };
    setFonts();
  }, []); // load async fonts will component did mount and set local state

  if (!loadFonts) {
    // render loading...
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  //render app
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add task" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
