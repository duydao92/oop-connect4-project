import { Column } from "./column.js";

export class Game {
  constructor (player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 1;
    this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
  }
  getTokenAt (row, col) {
    // come back here later
  }

  getName(){ // return a string of player names
      return `${this.player1} vs. ${this.player2}`
  }

  playInColumn(colIndex){
    this.columns[colIndex].add(this.currentPlayer)

    if(this.currentPlayer === 1){
      this.currentPlayer = 2;
    } else {
       this.currentPlayer = 1;
    }
  }

}


// SOLELY RESPONSIBLE FOR MANAGING THE STATE OF GAME
