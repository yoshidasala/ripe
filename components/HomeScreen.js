import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>RIPE</Text>
      <StatusBar style='auto' />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "40%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
