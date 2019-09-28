import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Card() {
  return (
    <View style={styles.cardContainer}>
      <Text>Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    background: "lightblue",
    height: "25%",
    width: "40%"
  }
});
