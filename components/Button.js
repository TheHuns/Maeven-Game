import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ buttonText }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2d2d2d",
    width: "80%",
    padding: 10,
    textAlign: "center"
  },
  text: {
    color: "#ddd"
  }
});
