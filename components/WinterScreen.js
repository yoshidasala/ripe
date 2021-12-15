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
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import BottomTabNav from "./BottomTabNav";
import summer from "../assets/summer.png";
import fall from "../assets/fall.png";
import winter from "../assets/winter.png";
import spring from "../assets/spring.png";
import { FlatGrid } from "react-native-super-grid";

export default function WinterScreen({ navigation }) {
  const [items, setItems] = useState([
    { name: "daikon radish", code: "#1abc9c", img: "../assets/summer.png" },
    { name: "strawberry", code: "#2ecc71", img: "../assets/summer.png" },
    { name: "apple", code: "#3498db", img: "../assets/summer.png" },
    { name: "renkon", code: "#9b59b6", img: "../assets/summer.png" },
    { name: "cabbage", code: "#34495e", img: "../assets/summer.png" },
    { name: "mikan", code: "#16a085", img: "../assets/summer.png" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Winter</Text>

      <Image source={summer} style={{ width: 20, height: 20, margin: 10 }} />
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        staticDimension={300}
        fixed
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: "#ecf0f1" }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Image
              source={item.img}
              style={{ width: 20, height: 20, margin: 10 }}
            />
          </View>
        )}
      />
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> HOME</Text>

          <Image
            source={summer}
            style={{ width: 20, height: 20, margin: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Fall")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> FALL</Text>

          <Image
            source={winter}
            style={{ width: 20, height: 20, margin: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Summer")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> SUMMER</Text>

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
    color: "#949494",
    width: "40%",
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
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 20,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    fontSize: 10,
    elevation: 5,
  },
  buttonText: {
    color: "#9A9A9A",

    fontSize: 10,
  },
  itemName: {
    fontSize: 14,
    color: "#9A9A9A",
    fontWeight: "100",
    textAlign: "center",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
