import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MemoryGameScreen from "./screens/MemoryGameScreen";
import HomeScreen from "./screens/HomeScreen";
import TakePicturesScreen from "./screens/TakePicturesScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    MemoryGame: MemoryGameScreen,
    Picture: TakePicturesScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
