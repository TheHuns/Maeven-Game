import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from '../components/Button'

export default function HomeScreen() {
    return (
        <View>
            <Text>Funny Bunny</Text>
            <Image source={require('../assets/bunny.png')}></Image>
            <Button buttonText="Take Pictures" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 15,
        justifyContent: "space-around"
    }
})
