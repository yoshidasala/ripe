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

export default function SummerScreen({ navigation }) {
  const [items, setItems] = useState([
    { name: "watermelon", code: "#1abc9c", color: "#ED6665" },
    { name: "peach", code: "#2ecc71", color: "#FFCBA4" },
    { name: "yuzu", code: "#3498db", color: "#E5C78E" },
    { name: "uni", code: "#9b59b6", color: "#E2D0B6" },
    { name: "edamame", code: "#34495e", color: "#9CA38A" },
    { name: "muskmelon", code: "#16a085", color: "#BDD49A" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summer</Text>

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

            <View
              style={{
                alignSelf: "center",
                width: 20,
                height: 20,
                borderRadius: 100 / 2,
                backgroundColor: `${item.color}`,
              }}
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
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> WINTER</Text>

          <Image
            source={winter}
            style={{ width: 20, height: 20, margin: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> FALL</Text>

          <Image source={fall} style={{ width: 20, height: 20, margin: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
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
    height: 100,
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
