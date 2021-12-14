import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>RIPE</Text>
      <StatusBar style='auto' />
      <TouchableOpacity style={styles.button}>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.buttonText}
        >
          START
        </Text>
      </TouchableOpacity>
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
    fontcolor: "#949494",
    width: "40%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadow: "20px",
  },
});
