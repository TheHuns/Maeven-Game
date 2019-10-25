import React, { Component } from "react";
import { Text, Image, View, StyleSheet, Dimensions } from "react-native";
import { GameConsumer } from "../Context";

export default class PicDisplay extends Component {
  state = {
    picSize: 100
  };

  componentDidMount() {
    this.getDims();
  }

  getDims = () => {
    let picSize;
    let { height, width } = Dimensions.get("screen");
    if (width < 340) {
      picSize = width / 3.5;
    } else {
      picSize = width / 2.5;
    }
    this.setState({
      picSize
    });
  };

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          flex: 3,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          paddingHorizontal: 10
        }}
      >
        <Text
          style={[styles.infoBox, { backgroundColor: "#e4e4e4", padding: 4 }]}
        >
          Select 2 to 4 pictures from camera roll the select the start button at
          bottom to begin game.
        </Text>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >
          <GameConsumer>
            {value => {
              if (value.picList.length < 1) {
                return (
                  <Text style={{ marginVertical: 50 }}>No Images Selected</Text>
                );
              } else {
                let list = value.picList;
                return list.map((uri, index) => {
                  return (
                    <View key={index.toString()}>
                      <Text>{index + 1}</Text>
                      <Image
                        source={{ uri: uri }}
                        style={{
                          height: this.state.picSize,
                          width: this.state.picSize,
                          margin: 5
                        }}
                      />
                    </View>
                  );
                });
              }
            }}
          </GameConsumer>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoBox: {
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12
  }
});
