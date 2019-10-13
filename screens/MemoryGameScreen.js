import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import { GameContextProvider } from "../Context";
import Card from "../components/Card";
import { picNames } from "../picNames";
import IncorrectGuessModal from "../components/IncorrectGuessModal";
import CorrectGuessModal from "../components/CorrectGuessModal";

export default class MemoryGameScreen extends React.Component {
  backArrowHandler = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <TouchableOpacity
            onPress={() => this.backArrowHandler()}
            style={styles.backButton}
          >
            {/* <Text style={styles.backButtonText}>Back</Text> */}
            <Image source={require("../assets/backArrow.png")} style={{height: 20, width: 20}}/>
          </TouchableOpacity>
          <Text style={styles.title}>Memory Game</Text>
        </View>
        <GameContextProvider>
          {picNames.map((name, index) => {
            return (
              <Card
                key={index}
                number={index}
                name={name.name}
                uri={name.uri}
              />
            );
          })}
          <IncorrectGuessModal />
          <CorrectGuessModal />
        </GameContextProvider>
      </View>
    );
  }
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
    width: "70%",
    fontSize: 26,
    textAlign: "center",
    paddingBottom: 10
  },
  backButton: {
    height: 40,
    width: 70,
    backgroundColor: "rgba(59, 89, 152, .8)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  backButtonText: {
    color: "#f4f4f4",
    fontSize: 16
  }
});
