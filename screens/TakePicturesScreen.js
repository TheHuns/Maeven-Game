import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import * as FileSystem from 'expo-file-system';

export default class TakePicturesScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
    let data = FileSystem.cacheDirectory;
    console.log(data);
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({ quality: 0.2 });
      await FileSystem.cacheDirectory(photo);
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 2, padding: 10 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            ></View>
          </Camera>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <TouchableOpacity onPress={() => this.snap()}>
              <Text style={{ fontSize: 18, marginBottom: 10 }}> Capture </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  type:
                    this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                });
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10 }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}
