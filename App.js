import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./components/LoginScreen";
import LandingScreen from "./components/LandingScreen";
import HomeScreen from "./components/HomeScreen";
import SummerScreen from "./components/SummerScreen";
import WinterScreen from "./components/WinterScreen";
import FallScreen from "./components/FallScreen";
import SpringScreen from "./components/SpringScreen";

import { auth } from "./firebase";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name='Landing'
          component={LandingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Summer'
          component={SummerScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Winter'
          component={WinterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Fall'
          component={FallScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Spring'
          component={SpringScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
});
