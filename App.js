import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";

export default function App() {
  const cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funny Bunny</Text>
      {cardNumbers.map((number, index) => {
        return <Card key={index} number={number} />
      })
      }
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
