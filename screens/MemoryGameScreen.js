import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import GameContext, { GameConsumer } from "../Context";
import Card from "../components/Card";
import IncorrectGuessModal from "../components/IncorrectGuessModal";
import CorrectGuessModal from "../components/CorrectGuessModal";

export default class MemoryGameScreen extends React.Component {
  state = {
    list: []
  };
  static contextType = GameContext;

  componentDidMount() {
    let hookTest = this.context;
    hookTest.cleanStart();
    this.setState({
      list: hookTest.gameSetupHandler()
    });
  }

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
            <Image
              source={require("../assets/backArrow.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Memory Game</Text>
        </View>
        {this.state.list.map((name, index) => {
          return <Card key={index} number={index} name={name} uri={name} />;
        })}

        <IncorrectGuessModal />
        <CorrectGuessModal />
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
