import React, { Component } from "react";

import "./guess-form.css";

export default class Guessform extends Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onSubmit) {
      const value = this.input.value;
      this.props.onSubmit(value);
    }
    this.input.value = "";
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          min="1"
          max="100"
          autoComplete="off"
          placeholder="Enter your Guess"
          ref={input => (this.input = input)}
          onSubmit={e => this.props.onSubmit(e.target.value)}
          required
        />
        <button type="submit" name="submit">
          Guess
        </button>
      </form>
    );
  }
}
