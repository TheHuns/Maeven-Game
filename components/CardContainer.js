import React from "react";
import { View, StyleSheet } from "react-native";
import { picNames } from "../picNames";
import Card from "./Card";

export default function CardContainer() {
  return (
    <View style={styles.container}>
      {picNames.map((name, index) => {
        return (
          <Card key={index} number={index} name={name.name} uri={name.uri} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
