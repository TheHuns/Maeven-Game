import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class Card extends React.Component {
  state={
    showImg: false
  }
  
  changeBackground() {
    this.setState({
      showImg: !showImg
    })
  }
  render() {
    const number = this.props.number
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={this.changeBackground}>
        <Text>{number}</Text>
      </TouchableOpacity>
    );

  }


}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "lightblue",
    height: "25%",
    width: "40%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
