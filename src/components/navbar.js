import React from "react";

import "./navbar.css";

export default function Navbar(props) {
  return <button onClick={() => props.onRestart()}>+ New Game</button>;
}
