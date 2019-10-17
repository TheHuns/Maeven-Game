import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import { GameConsumer } from "../Context";

export default class PicDisplay extends Component {
  render() {
    return (
        <View style={{justifyContent: "center", flex: 3, flexDirection: "row", flexWrap: "wrap", alignItems: "center", paddingHorizontal: 10}}>
          <Text>Select 4 pictures from camera roll the select the start button at bottom to begin game.</Text>
      <GameConsumer>
        {value => {
          if (value.picList.length < 1) {
            return <Text style={{ marginVertical: 50 }}>No Images Selected</Text>;
          } else {
            let list = value.picList;
              return(
                list.map((uri, index) => {
                  return(

                <View>
                  <Text>{index + 1}</Text>
                  <Image
                    source={{ uri: uri }}
                    style={{ height: 150, width: 150, margin: 5 }}
                    key={uri}
                  />
                </View>
                  )
                })
              )
              
          }

        }}
      </GameConsumer>
        </View>
    );
  }
}
