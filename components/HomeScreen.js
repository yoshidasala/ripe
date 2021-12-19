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
import summer from "../assets/summer.png";
import fall from "../assets/fall.png";
import winter from "../assets/winter.png";
import spring from "../assets/spring.png";
import BottomTabNav from "./BottomTabNav";

import { auth } from "../firebase";
import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { Component } from "react";

export default function HomeScreen({ navigation }) {
  const [error, setError] = useState("");
  const [location, setLocation] = useState({});

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
      <Text style={styles.buttonText}>WELCOME BACK SALA</Text>
      <br />

      <br />
      <TouchableOpacity
        onPress={() => navigation.navigate("Summer")}
        style={styles.home}
      >
        <Image source={summer} style={{ width: 20, height: 20, margin: 10 }} />
        <TouchableOpacity style={styles.button}>
          {location === undefined ? (
            "...loading"
          ) : (
            <Text style={styles.buttonText}>
              The current season at {text.city},{text.country} is Summer
            </Text>
          )}
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.nav}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}> LOGOUT</Text>

          <Image
            source={summer}
            style={{ width: 20, height: 20, margin: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Winter")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> WINTER</Text>

          <Image
            source={winter}
            style={{ width: 20, height: 20, margin: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Fall")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> FALL</Text>

          <Image source={fall} style={{ width: 20, height: 20, margin: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Spring")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> SPRING</Text>

          <Image
            source={spring}
            style={{ width: 20, height: 20, margin: 10 }}
          />
        </TouchableOpacity>
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
  home: {
    fontcolor: "#949494",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadow: "20px",
  },
  title: {
    marginTop: 100,
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
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
