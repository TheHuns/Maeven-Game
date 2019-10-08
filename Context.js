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

  setCard = (name, number) => {
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

        () => {
          if (this.state.cardA.name == this.state.cardB.name) {
            Alert.alert("Good Guess!");
            this.clearCards();
          } else {
            setTimeout(
              function() {this.setState(prevState => ({
              cardsShowing: {
                ...prevState.cardsShowing,
                [this.state.cardA.id]: false,
                [this.state.cardB.id]: false
              }
              }));
              this.clearCards();
              }, 2000)
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
