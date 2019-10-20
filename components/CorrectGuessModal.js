import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { GameConsumer } from "../Context";

export default function CorrectGuessModal() {
  return (
    <GameConsumer>
      {value => (
        <View
          style={[
            styles.modalContainer,
            value.correctModalShowing ? styles.hideModal : null
          ]}
        >
          <View style={styles.innerBackground}>
            <Image
              source={require("../assets/thumbs_up.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.text}>Good Job, That's a Match!</Text>
          </View>
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
    backgroundColor: "rgba(150, 150, 150, 0.1)",
    justifyContent: "space-around",
    flexDirection: "row",
    height: "120%",
    width: "100%"
  },
  hideModal: {
    top: 15
  },
  text: {
    fontSize: 20,
    color: "blue"
  },
  innerBackground: {
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(200, 200, 200, 0.8)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 76
  }
});
