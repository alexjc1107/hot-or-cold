import React from "react";

import "./guess-number.css";

export default function Guessnumber(props) {
  return (
    <p>
      Guess #<span className="guessNumber">{props.title}</span>!
    </p>
  );
}
