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
    this.setState(prevState => ({
      cardA: {
        ...prevState.cardA,
        name: "",
        id: null
      },
      cardB: {
        ...prevState.cardB,
        name: "",
        id: null
      }
    }));
  };

  resetCurrentCards = () => {
    this.setState(prevState => ({
      cardsShowing: {
        ...prevState.cardsShowing,
        [this.state.cardA.id]: false,
        [this.state.cardB.id]: false
      }
      }));
  }


  // Main function called every time a card is flipped to run game logic
  setCard = (name, number) => {
    // Sets first card in comparison group
    if (this.state.cardA.name == "") {
      this.setState(prevState => ({
        cardA: {
          ...prevState.cardA,
          name,
          id: number
        },
        cardsShowing: {
          ...prevState.cardsShowing,
          [number]: !this.state.cardsShowing[`${number}`]
        }
      }));
    } else {
      // If first card spot is full sets the second card spot and beings comparison
      this.setState(
        prevState => ({
          cardB: {
            ...prevState.cardB,
            name,
            id: number
          },
          cardsShowing: {
            ...prevState.cardsShowing,
            [number]: !this.state.cardsShowing[`${number}`]
          }
        }),
        // Callback executed when both spots in card comparison part of state have data
        () => {
          if (this.state.cardA.name == this.state.cardB.name) {
            Alert.alert("Good Guess!");
            this.clearCards();
          } else {
            setTimeout(() => {
              this.resetCurrentCards();
              this.clearCards();
            }
              ,500)
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
