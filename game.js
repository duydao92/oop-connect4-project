import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";

export class Game {
  constructor (player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 1;
    this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
    this.winnerNumber = 0
  }
  getTokenAt (row, col) {
     return this.columns[col].getTokenAt(row)
  }

  getName(){ // return a string of player names
    if (this.winnerNumber === 1) {
      return `${this.player1} wins!`
    }
    if (this.winnerNumber === 2) {
      return `${this.player2} wins!`
    }
    if (this.winnerNumber === 3) {
      return `${this.player1} ties with ${this.player2}!`
    }
    return `${this.player1} vs. ${this.player2}`
  }

  playInColumn(colIndex){
    this.columns[colIndex].add(this.currentPlayer)

    if(this.currentPlayer === 1){
      this.currentPlayer = 2;
    } else {
       this.currentPlayer = 1;
    }
    this.checkForTie()
    this.checkForColumnWin ()
    this.getName()
  }

  checkForColumnWin () {
    if (this.winnerNumber !== 0) return
    for (let i = 0; i < this.columns.length; i++) {
      let column = this.columns[i];
      let inspecting = new ColumnWinInspector(column)
      if (inspecting.inspect() !== undefined) {
        this.winnerNumber === inspecting.inspect()
      }
    }
  }

  checkForTie() {
    let allFull = this.columns.every(column =>column.isFull());
    if (allFull) {
      this.winnerNumber = 3
    }
  }
}


// SOLELY RESPONSIBLE FOR MANAGING THE STATE OF GAME
