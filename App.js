import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameContextProvider } from "./Context";
import Card from "./components/Card";
import { picNames } from "./picNames";
import IncorrectGuessModal from "./components/IncorrectGuessModal";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoryGameScreen from "./screens/MemoryGameScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <AppContainer />
  );
}

const AppContainer = createAppContainer(RootStack);


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    MemoryGame: MemoryGameScreen,
  },
  {
    initialRouteName: 'Home',
  }
);