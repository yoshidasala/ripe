import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import BottomTabNav from "./BottomTabNav";

export default function WinterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Winter</Text>

      <StatusBar style='auto' />
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
  title: {
    alignItems: "center",
    textDecorationColor: "red",
    textDecorationLine: "line-through",
  },
});
