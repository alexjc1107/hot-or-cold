import React, { Component } from "react";
import "./Hot-or-cold.css";
import Navbar from "./navbar";
import Header from "./header";
import Gamestatus from "./gamestatus";
import Guessform from "./guess-form";
import Guessnumber from "./guess-number";
import Guesshistory from "./guess-history";

export default class Hotcold extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Make your Guess!",
      guess: 0,
      guesses: [],
      answer: Math.floor(Math.random() * 100) + 1
    };
  }

  makeGuess(guessVal) {
    const difference = Math.abs(guessVal - this.state.answer);
    let guess = this.state.guess + 1;
    this.setState({ guess });

    let status;
    if (difference >= 10) {
      status = "Cold";
    } else if (difference >= 1) {
      status = "Hot";
    } else {
      status = "You Won! Click new game to play again";
    }

    this.setState({
      status,
      guesses: [...this.state.guesses, guessVal]
    });
  }

  restart() {
    this.setState({
      status: "Make your Guess!",
      guess: 0,
      guesses: [],
      answer: Math.floor(Math.random() * 100) + 1
    });
  }

  render() {
    const headerText = "HOT or COLD";
    return (
      <div className="App">
        <Navbar onRestart={() => this.restart()} />
        <Header title={headerText} />
        <Gamestatus title={this.state.status} />
        <Guessform onSubmit={guessVal => this.makeGuess(guessVal)} />
        <Guessnumber title={this.state.guess} />
        <Guesshistory guesses={this.state.guesses} />
      </div>
    );
  }
}
