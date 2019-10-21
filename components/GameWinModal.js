import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { GameConsumer } from "../Context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { render } from "react-dom";

export default class GameWinModal extends React.Component {
  navigateToGame = () => {
    this.props.navigation.navigate("Images");
  };
  render() {
    return (
      <GameConsumer>
        {value => (
          <View
            style={[
              styles.modalContainer,
              value.gameWinModalShow ? styles.hideModal : null
            ]}
          >
            <View style={styles.innerBackground}>
              <Image
                source={require("../assets/WinnersCup.png")}
                style={{ height: 50, width: 50, flex: 1 }}
              />
              <View style={styles.textBox}>
                <Text style={styles.text}>Way to Go!</Text>
                <Text style={styles.text}>You got them all Matched!</Text>
                <Text style={styles.text}>Play Again?</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.navigateToGame();
                  value.cleanStart();
                }}
              >
                <Text>Start Game</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </GameConsumer>
    );
  }
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
    top: "25%"
  },
  text: {
    fontSize: 20,
    color: "blue"
  },
  innerBackground: {
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(200, 200, 200, 0.8)",
    alignItems: "center",
    justifyContent: "space-around",
    height: 400
  },
  textBox: {
    flex: 2,
    justifyContent: "space-around"
  },
  button: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
    backgroundColor: "#B6CAEC",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12
  }
});
