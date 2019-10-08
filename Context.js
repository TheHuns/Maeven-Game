import React, { Component } from "react";
import { Alert } from "react-native";

const GameContext = React.createContext();

export class GameContextProvider extends Component {
  state = {
    cardA: {
      name: "",
      id: null
    },
    cardB: {
      name: "",
      id: null
    },
    cardsShowing: {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false
    }
  };

  getCardState = number => {
    let cardState = this.state.cardsShowing[`${number}`];
    return cardState;
  };

  clearCards = () => {
    this.setState({
      cardA: "",
      cardB: ""
    });
  };

  setCard = (name, number) => {
    if (this.state.cardA.name == "") {
      this.setState(prevState => ({
        cardA: {
          ...prevState.cardA,
          name
        },
        cardsShowing: {
          ...prevState.cardsShowing,
          [number]: true
        }
      }));
    } else {
      this.setState(
        prevState => ({
          cardB: {
            ...prevState.cardB,
            name
          }
        }),

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
          setCard: this.setCard,
          getCardState: this.getCardState,
          cardsShowing: this.state.cardsShowing
        }}
      >
        {children}
      </GameContext.Provider>
    );
  }
}

export const GameConsumer = GameContext.Consumer;
