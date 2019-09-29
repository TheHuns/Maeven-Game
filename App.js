import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";

export default function App() {
  const picNames = [
    require("./assets/baby.jpg"),
    require("./assets/bubba.jpg"),
    require("./assets/elmo.jpg"),
    require("./assets/bear.jpg"),
    require("./assets/elmo.jpg"),
    require("./assets/bubba.jpg"),
    require("./assets/baby.jpg"),
    require("./assets/bear.jpg")
  ];

  const [pic1, setPic1] = useState({
    pic1: ""
  });
  const [pic2, setPic2] = useState({
    pic2: ""
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funny Bunny</Text>
      {picNames.map((name, index) => {
        return <Card key={index} number={index} name={name} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2d",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 25,
    paddingVertical: "12%",
    justifyContent: "space-around"
  },
  title: {
    color: "lightblue",
    width: "100%",
    fontSize: 22,
    textAlign: "center",
    paddingBottom: 10
  }
});
