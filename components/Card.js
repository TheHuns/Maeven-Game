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
              console.log(value.getCardState(number));
              value.setCard(name, number);
            }}
          >
            <Image
              style={[
                styles.img,
                value.getCardState(number) ? null : styles.hidePic
              ]}
              source={uri}
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
    height: "25%",
    width: "40%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  hidePic: {
    display: "none"
  },
  img: {
    width: "100%",
    height: "100%"
  }
});
