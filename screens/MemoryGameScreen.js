import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameContextProvider } from "./Context";
import Card from "./components/Card";
import { picNames } from "./picNames";
import IncorrectGuessModal from "./components/IncorrectGuessModal";

export default function MemoryGameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funny Bunny</Text>
      <GameContextProvider>
        {picNames.map((name, index) => {
          return (
            <Card key={index} number={index} name={name.name} uri={name.uri} />
          );
        })}
        <IncorrectGuessModal />
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
    padding: 20,
    paddingVertical: "7%",
    justifyContent: "space-around"
  },
  title: {
    color: "lightblue",
    width: "100%",
    fontSize: 26,
    textAlign: "center",
    paddingBottom: 10
  }
});
