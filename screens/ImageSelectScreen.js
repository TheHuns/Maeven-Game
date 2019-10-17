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

  render() {
    return (
      <GameContextProvider>
        <View
          style={{
            flex: 1,
            paddingTop: 22
          }}
        >
          <View style={styles.headerContainer}>

          <GameConsumer>
            {value => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => value._pickImage()}
              ><Text style={styles.buttonText}>Select Images</Text></TouchableOpacity>
            )}
          </GameConsumer>
          <GameConsumer>
            {value => (
              <TouchableOpacity
                onPress={() => value._deSelectImages()}
                style={styles.button}
              ><Text style={styles.buttonText}>Cancel Selections</Text></TouchableOpacity>
            )}
          </GameConsumer>
          </View>
          <PicDisplay />
        </View>
      </GameContextProvider>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: "40%",
    height: 50,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    margin: 12
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
