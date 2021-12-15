import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";

import * as Location from "expo-location";
import summer from '../assets/summer.svg'
import BottomTabNav from "./BottomTabNav";
import { auth } from "../firebase";
import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { Component } from "react";

// Geocoder.init("AIzaSyAYEsNqTwsN_zap_PtZRWrsQBACrrLA23g"); // use a valid API key

export default function HomeScreen({ navigation }) {
  const [error, setError] = useState("");
  const [location, setLocation] = useState({});

  const getSeason = (d) => Math.floor((d.getMonth() / 12) * 4) % 4;

  console.log("Southern hemisphere (Summer as Dec/Jan/Feb etc...):");
  console.log(["Summer", "Autumn", "Winter", "Spring"][getSeason(new Date())]);

  console.log("Northern hemisphere (Winter as Dec/Jan/Feb etc...):");
  console.log(["Winter", "Spring", "Summer", "Autumn"][getSeason(new Date())]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let key = await Location.setGoogleApiKey(
        "AIzaSyAYEsNqTwsN_zap_PtZRWrsQBACrrLA23g"
      );
      let address = await Location.reverseGeocodeAsync(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }
        // { useGoogleMaps: true }
      );

      setLocation(address);
    })();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Landing");
      })

      .catch((error) => alert(error.message));
  };

  let text = "Loading..";
  if (error) {
    text = error;
  } else if (location[0]) {
    console.log(location[0]);
    text = JSON.stringify(location[0]);
    text = JSON.parse(text);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        {location === {} ? (
          "...loading"
        ) : (
          <Text style={styles.buttonText}>
            Your Current Location is {text.city},{text.country}
          </Text>
        )}
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("WINTER")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>WINTER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("WINTER")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>SUMMER</Text>

        </TouchableOpacity>
        <Image source={summer} style = {{width:"305",height:"159"}}/>
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
