import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class MainButton extends React.Component {
  route = this.props.route;

  handlePress = route => {
    this.props.navigation.navigate([`${route}`]);
    console.log(this.props.navigation.navigate());
  };

  render() {
    const { buttonText } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2d2d2d",
    width: "70%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#ddd",
    fontSize: 18
  }
});
