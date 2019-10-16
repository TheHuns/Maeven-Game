import * as React from "react";
import { Button, Image, View, Text } from "react-native";
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
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <GameConsumer>
            {value => (
              <Button
                title="Pick an image from camera roll"
                onPress={() => value._pickImage()}
              />
            )}
          </GameConsumer>
          <PicDisplay />
          <GameConsumer>
            {value => (
              <Button
                title="Deselect Images"
                onPress={() => value._deSelectImages()}
                style={{ marginTop: 20 }}
              />
            )}
          </GameConsumer>
        </View>
      </GameContextProvider>
    );
  }
}
