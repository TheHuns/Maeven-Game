import React, { Component } from "react";
import { Alert } from "react-native";

const GameContext = React.createContext();

export class GameContextProvider extends Component {
  state = {
    cardA: "",
    cardB: "",
    showImg0: false
  };

  clearCards = () => {
    this.setState({
      cardA: "",
      cardB: ""
    });
  };

  setCard = name => {
    if (this.state.cardA == "") {
      this.setState({
        cardA: name
      });
    } else {
      this.setState(
        {
          cardB: name
        },

        () => {
          if (this.state.cardA == this.state.cardB) {
            Alert.alert("Good Guess!");
            this.clearCards();
          }
        }
      );
    }
  };

  render() {
    const { children } = this.props;

    return (
      <GameContext.Provider
        value={{
          cardA: this.state.cardA,
          cardB: this.state.cardB,
          clearCards: this.clearCards,
          setCard: this.setCard
        }}
      >
        {children}
      </GameContext.Provider>
    );
  }
}

export const GameConsumer = GameContext.Consumer;
