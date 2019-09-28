import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class Card extends React.Component {
  state={
    cardFacing: 
  }
  
  changeBackground() => {
    this.set
  }
  render() {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={() => }>
        <Text>Card</Text>
      </TouchableOpacity>
    );

  }


}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "lightblue",
    height: "25%",
    width: "40%",
    margin: 5
  }
});
