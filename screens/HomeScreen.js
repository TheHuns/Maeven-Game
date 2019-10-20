import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";
import MainButton from "../components/MainButton";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.iconStyle}>
        <Image
          source={require("../assets/bunny.png")}
          style={{height: 250, width: 250}}
        ></Image>

        </View>
        <Text style={[styles.buttonText, {fontSize: 26}]}>Funny Bunny</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Images")}
          style={styles.button}
        >
          <Text style={styles.buttonText, {color: "#3C72CB"}}>Select Pictures and Begin Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: "#f4f4f4"
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
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12
  },
  buttonText: {
    fontSize: 18
  },
  iconStyle: {
    height: 250, width: 250, borderRadius: 125, borderWidth: 1,
    borderColor: "#f4f4f4",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12
  }
});