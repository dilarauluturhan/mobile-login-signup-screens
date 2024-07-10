// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Flexbox from "./screens/Flexbox";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* 
     initialRouteName = ilk başta karşımıza çıkacak olan component
     screenOptions = ekranlar için kullanılacak olan default seçenekler
     https://reactnavigation.org/docs/stack-navigator/
     */}
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
        lazy
      >
        <Stack.Screen name="Flexbox" component={Flexbox} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
