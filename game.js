// SOLELY RESPONSIBLE FOR MANAGING THE STATE OF GAME

import { Columns } from "./columns";

export class Game {
  constructor (player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 1;
    this.columns = Array(7).fill(new Columns)
  }
  getTokenAt (row, col) { //return null if the square is empty, 1 if black is there, 2 if red.

  }

  getName(){ // return a string of player names
      return `${this.player1} VS. ${this.player2}`
  }

  playInColumn(col){
    if(this.currentPlayer === 1){
      this.currentPlayer = 2;
    } else {
       this.currentPlayer = 1;
    }
  }
}
