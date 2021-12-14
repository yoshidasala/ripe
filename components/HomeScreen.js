import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";

import BottomTabNav from "./BottomTabNav";
import { auth } from "../firebase";
import { db } from "../firebase";
import { signOut } from "firebase/auth";

export default function HomeScreen({ navigation }) {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Landing");
      })

      .catch((error) => alert(error.message));
  };
  const getData = async () => {
    const produce = "beets";
    // const summerProduce = collection(db, "summer");
    // const summerSnapshot = await getDocs(summerProduce);
    // const summerProduceList = summerSnapshot.docs.map((doc) => doc.data());
    // console.log(summerProduceList);
    // return summerProduceList;
    await setDoc(doc(db, "summer", "3"), {
      produce_name: produce,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getData} style={styles.button}>
          <Text style={styles.buttonText}>GET DATA</Text>
        </TouchableOpacity>
        {/* <BottomTabNav /> */}
      </View>
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
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  buttonText: {
    color: "#9A9A9A",

    fontSize: 10,
  },
});
