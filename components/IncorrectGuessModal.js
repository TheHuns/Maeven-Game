import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { GameConsumer } from "../Context";

export default function IncorrectGuessModal() {
  return (
    <GameConsumer>
      {value => (
        <View
          style={[
            styles.modalContainer,
            value.incorrectModalShowing ? styles.hideModal : null
          ]}
        >
          <Image
            source={require("../assets/sadface.jpg")}
            style={{ height: 100, width: 100 }}
          />
          <Text style={styles.text}>Try Again!</Text>
        </View>
      )}
    </GameConsumer>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    top: "150%",
    zIndex: 5,
    backgroundColor: "rgba(50, 50, 50, 0.85)",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    paddingVertical: 150
  },
  hideModal: {
    top: 25
  },
  text: {
    fontSize: 30,
    color: "#eee"
  }
});
