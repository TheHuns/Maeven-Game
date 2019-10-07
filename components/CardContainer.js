import React from 'react';
import {View, StyleSheet} from 'react-native';
import { GameConsumer } from '../Context';
import {picNames} from '../picNames';
import Card from './Card'

export default function CardContainer() { 
    return (
        <GameConsumer>

            {(value) => (
                <View style={styles.container}>
                  {picNames.map((name, index) => {
                    return (
                      <Card key={index} number={index} name={name.name} uri={name.uri} showImg={this.value.cardShowing.${index}} />
                    );
                  })}
      
                </View>
              )}
        </GameConsumer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
