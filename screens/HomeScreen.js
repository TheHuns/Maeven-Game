import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import MainButton from "../components/MainButton";

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Funny Bunny</Text>
        <Image
          source={require("../assets/bunny.png")}
          style={{ height: 150, width: 150 }}
        ></Image>
        <Button
          title="Take Pictures"
          onPress={() => {
            this.props.navigation.navigate("Picture");
          }}
        />
        <Button
          title="Go To Game"
          onPress={() => {
            this.props.navigation.navigate("MemoryGame");
          }}
        />
        <MainButton route="Picture" buttonText="Test" navigation={navigation} />
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
  }
});
