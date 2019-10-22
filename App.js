import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MemoryGameScreen from "./screens/MemoryGameScreen";
import HomeScreen from "./screens/HomeScreen";
import TakePicturesScreen from "./screens/TakePicturesScreen";
import ImageSelectScreen from "./screens/ImageSelectScreen";
import MultiplePickerScreen from "./screens/MultiplePickerScreen";
import { GameContextProvider } from "./Context";
import GameWinModal from "./components/GameWinModal";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    MemoryGame: MemoryGameScreen,
    Picture: TakePicturesScreen,
    Images: ImageSelectScreen,
    GameWin: GameWinModal,
    MultipleImages: MultiplePickerScreen,
  },
  {
    initialRouteName: "Images",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <GameContextProvider>
        <AppContainer />
      </GameContextProvider>
    );
  }
}
