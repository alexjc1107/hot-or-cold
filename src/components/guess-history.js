import React from "react";

import "./guess-history.css";

export default function Guesshistory(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return <ul id="guessHistory">{guesses}</ul>;
}
