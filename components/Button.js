import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function Button({buttonText}) {
    return (
        <TouchableOpacity>
            <Text>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "light-blue",
        width: "80%",
        padding: 10
    }
})
