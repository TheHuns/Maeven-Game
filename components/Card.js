import React, { Component } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { GameConsumer } from "../Context";

export default class Card extends Component {
  componentDidMount() {
    let showImg;
  }

  render() {
    // let cardView = !showImg ? (
    //   <Image style={{ width: "100%", height: "100%" }} source={props.uri} />
    // ) : (
    //   <Text>Flip!</Text>
    // );

    let { number, name, uri } = this.props;

    return (
      <GameConsumer>
        {value => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => {
              value.setCard(name, number);
            }}
          >
            <Image
              style={[
                styles.img,
                value.getCardState(number) ? null : styles.hidePic
              ]}
              source={{ uri: uri }}
            />
            <Image
              style={[
                styles.logo,
                value.getCardState(number) ? styles.hidePic : null
              ]}
              source={require("../assets/bunny.png")}
            />
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
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "lightblue",
    height: "22%",
    width: "40%",
    margin: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  hidePic: {
    display: "none"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  logo: {
    width: "85%",
    height: "85%"
  }
});
