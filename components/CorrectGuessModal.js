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
              source={require("../assets/sadface.jpg")}
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
    backgroundColor: "rgba(50, 50, 50, 0.2)",
    justifyContent: "space-around",
    flexDirection: "row",
    height: "120%",
    width: "100%"
  },
  hideModal: {
    top: 12
  },
  text: {
    fontSize: 20,
    color: "blue"
  },
  innerBackground: {
    width: "100%",
    padding: 10,
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 76
  }
});
