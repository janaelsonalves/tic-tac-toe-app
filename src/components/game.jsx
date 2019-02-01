import React, { Component } from "react";
import Board from "./board";
import "./game.css";

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1 className="title">Tic-tac-toe App</h1>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
