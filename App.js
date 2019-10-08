import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameContextProvider } from "./Context";
import Card from "./components/Card";
import { picNames } from "./picNames";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funny Bunny</Text>
      <GameContextProvider>
        {picNames.map((name, index) => {
          return (
            <Card key={index} number={index} name={name.name} uri={name.uri} />
          );
        })}
      </GameContextProvider>
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
