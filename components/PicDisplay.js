import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import { GameConsumer } from "../Context";

export default class PicDisplay extends Component {
  render() {
    return (
      <GameConsumer>
        {value => {
          if (value.picList.length < 1)
            return <Text style={{ marginTop: 20 }}>No Images Selected</Text>;

          value.picList.map((uri, index) => {
            return (
              <View>
                <Text>{index + 1}</Text>
                <Image
                  source={{ uri: uri }}
                  style={{ height: 150, width: 150 }}
                  key={index}
                />
              </View>
            );
          });
        }}
      </GameConsumer>
    );
  }
}
