import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import BottomTabNav from "./BottomTabNav";
import LottieView from 'lottie-react-native';
import rip from "../assets/ripple.json";


export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RIPE</Text>
      <StatusBar style='auto' />
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.buttonText}
        >
          START
        </Text>
        <br />
        <View style={styles.circle} />
      </TouchableOpacity>
      {/* <LottieView
            style={{
              width: 400,
              height: 400,
              backgroundColor: '#eee',
        }}
        source={rip} autoPlay loop />; */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFBFC",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "#949494",
    width: "40%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadow: "20px",
    display: "flex",
    flexDirection: "column",
  },
  buttonText: {
    color: "#9A9A9A",

    fontSize: 10,
  },
  title: {
    alignItems: "center",
    textDecorationColor: "red",
    textDecorationLine: "line-through",
  },
  circle: {
    alignSelf: "center",
    width: 20,
    height: 20,
    borderRadius: 100 / 2,
    backgroundColor: "#EB5C6E",
  },
});
