import React, { useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Card({ number, name }) {
  const [showImg, setShowImg] = useState({
    showImg: false
  });

  let cardView = !showImg ? (
    <Image style={{ width: "100%", height: "100%" }} source={name} />
  ) : (
    <Text>{number}</Text>
  );

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => setShowImg(!showImg)}
    >
      {cardView}
      {/* {showImg ? (
        <Image style={{ width: "100%", height: "100%" }} source={name} />
      ) : (
        <Text>{number}</Text>
      )} */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "lightblue",
    height: "25%",
    width: "40%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
