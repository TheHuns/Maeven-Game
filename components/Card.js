import React, { useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { GameConsumer } from "../Context";

export default function Card({ number, name, uri, showImg }) {
  

  let cardView = !showImg ? (
    <Image style={{ width: "100%", height: "100%" }} source={uri} />
  ) : (
    <Text>Flip!
    </Text>
  );

  return (
    <GameConsumer>
      {( value ) => (
        <TouchableOpacity
          style={styles.cardContainer} 
          onPress={() => {
            value.setShowImg(!showImg);
            value.setCard(name);
          }}
        >
          {cardView}
          {/* {showImg ? (
        <Image style={{ width: "100%", height: "100%" }} source={name} />
      ) : (
        <Text>{number}</Text>
      )} */}
        </TouchableOpacity>
      )}
    </GameConsumer>
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
