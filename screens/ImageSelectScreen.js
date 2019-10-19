import * as React from "react";
import { Button, Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { GameConsumer, GameContextProvider } from "../Context";
import PicDisplay from "../components/PicDisplay";

export default class ImageSelectScreen extends React.Component {
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  navigateToGame = () => {
    this.props.navigation.navigate("MemoryGame");
  }

  render() {
    return (
      <GameContextProvider>
        <View
          style={{
            flex: 1,
            paddingTop: 22,
            backgroundColor: "#f4f4f4"
          }}
        >
          <View style={styles.headerContainer}>

          <GameConsumer>
            {value => (
              <TouchableOpacity
                style={ styles.buttonSelect}
                onPress={() => value._pickImage()}
              ><Text style={styles.buttonText, {color: "#3C72CB"}}>Select Images</Text></TouchableOpacity>
            )}
          </GameConsumer>
          <GameConsumer>
            {value => (
              <TouchableOpacity
                onPress={() => value._deSelectImages()}
                style={ styles.buttonCancel}
              ><Text style={styles.buttonText, {color: "#DF5334"}}>Cancel Selections</Text></TouchableOpacity>
            )}
          </GameConsumer>
          </View>
          <PicDisplay />
          
              <TouchableOpacity
                style={ [styles.buttonSelect, {width: "80%", marginHorizontal: "10%", marginBottom: 25}]}
                onPress={() => this.navigateToGame()}
              ><Text style={styles.buttonText, {color: "#3C72CB"}}>Start Game</Text></TouchableOpacity>
            
        </View>
      </GameContextProvider>
    );
  }
}

const styles = StyleSheet.create({
  
  buttonSelect:{
    width: "40%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
    backgroundColor: "#B6CAEC"
  },
  buttonCancel: {
    width: "40%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
    backgroundColor: "#F3BFB3"
  },
  buttonText: {
    fontSize: 18
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50
  }
})
