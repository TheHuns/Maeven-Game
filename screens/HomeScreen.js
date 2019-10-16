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
        <Text style={styles.buttonText}>Funny Bunny</Text>
        <Image
          source={require("../assets/bunny.png")}
          style={{ height: 150, width: 150 }}
        ></Image>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("MemoryGame")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Picture")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Take Pictures</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Images")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Select Pictures</Text>
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
    backgroundColor: "lightblue"
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Roboto"
  }
});
