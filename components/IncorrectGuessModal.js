import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import GameContext, { GameConsumer } from "../Context";
import * as Animatable from "react-native-animatable";

export default class IncorrectGuessModal extends React.Component {
  static contextType = GameContext;

  state = {
    isOpen: false
  };

  componentDidMount() {
    let isOpen = this.context.incorrectModalShowing;
    this.setState({
      isOpen
    });
    this.fadeIn();
  }
  handleViewRef = ref => (this.view = ref);

  fadeIn = () => {
    if (this.state.incorrectModalShowing) {
      this.view
        .fadeInDown(800)
        .then(endState => console.log("animation ended"));
    }
  };

  render() {
    return (
      <Animatable.View
        ref={this.handleViewRef}
        animation="fadeInDown"
        duration={500}
        style={
          styles.modalContainer
          // value.incorrectModalShowing ? styles.hideModal : null
        }
      >
        <View style={styles.innerBackground}>
          <Image
            source={require("../assets/sadface.jpg")}
            style={{ height: 50, width: 50 }}
          />
          <Text style={styles.text}>So Close, Try Again!</Text>
        </View>
      </Animatable.View>
    );
  }
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
    color: "orange"
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
