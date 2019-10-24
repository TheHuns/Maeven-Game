import React, { Component } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { GameConsumer } from "../Context";

export default class PicDisplay extends Component {
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
                  <View style={{marginTop: 50}} key={index.toString()}>
                    <Text>{index + 1}</Text>
                    <Image
                      source={{ uri: uri }}
                      style={{ height: 120, width: 120, margin: 5 }}
                      
                    />
                  </View>
                );
              });
            }
          }}
        </GameConsumer>
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
