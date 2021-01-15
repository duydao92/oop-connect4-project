import {
  Column
} from "./column.js";
import {
  ColumnWinInspector
} from "./column-win-inspector.js";
import {
  RowWinInspector
} from "./row-win-inspector.js";
import {
  DiagonalWinInspector
} from "./diagonal-win-inspector.js";

export class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 1;
    this.winnerNumber = 0
    this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
  }

  getTokenAt(row, col) {
    return this.columns[col].getTokenAt(row)
  }

   // return a string of player names
  //   if (this.winnerNumber === 1) {
  //     return `${this.player1} wins!`
  //   }
  //   if (this.winnerNumber === 2) {
  //     return `${this.player2} wins!`
  //   }
  //   if (this.winnerNumber === 3) {
  //     return `${this.player1} ties with ${this.player2}!`
  //   }
  //   return `${this.player1} vs. ${this.player2}`
  // }
  getName() {
    switch (this.winnerNumber) {
      case 1:
        return `${this.player1} wins!`
      case 2:
        return `${this.player2} wins!`
      case 3:
        return `${this.player1} ties with ${this.player2}!`
      default:
        return `${this.player1} vs. ${this.player2}`
    }
  }


  playInColumn(colIndex) {
    if (this.winnerNumber !== 0) return //Stops click functionality when winner is found.

    this.columns[colIndex].add(this.currentPlayer); //Add token to board.

    if (this.currentPlayer === 1) { //Switch player.
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
    this.checkForTie();
    this.checkForColumnWin();
    this.checkForRowWin();
    this.checkForDiagonalWin()
    this.boardToArray()
    this.getName();
    this.saveGameState();
  }

  checkForColumnWin() {
    if (this.winnerNumber !== 0) return

    for (let i = 0; i < this.columns.length; i++) {
      let column = this.columns[i];
      let inspecting = new ColumnWinInspector(column)
      if (inspecting.inspect() !== undefined) {
        this.winnerNumber = inspecting.inspect()
      }
    }
  }

  checkForRowWin() {
    if (this.winnerNumber !== 0) return

    for (let i = 0; i < 4; i++) {
      let col1 = this.columns[i];
      let col2 = this.columns[i + 1];
      let col3 = this.columns[i + 2];
      let col4 = this.columns[i + 3];
      let columns = [col1, col2, col3, col4];
      let inspecting = new RowWinInspector(columns);
      if (inspecting.inspect() !== undefined) {
        this.winnerNumber = inspecting.inspect();
      }
    }
  }

  checkForDiagonalWin() {
    if (this.winnerNumber !== 0) return

    for (let i = 0; i < 4; i++) {
    let col1 = this.columns[i]
    let col2 = this.columns[i + 1]
    let col3 = this.columns[i + 2]
    let col4 = this.columns[i + 3]
    let columns = [col1, col2, col3, col4]
    let inspecting = new DiagonalWinInspector(columns)
    if (inspecting.inspect() !== undefined) {
      this.winnerNumber = inspecting.inspect()
      }
    }
  }

  checkForTie() {
    if (this.columns.every(column => column.isFull())) {
      this.winnerNumber = 3;
    }
  }

  boardToArray() {
    let arr2D = JSON.stringify(this.columns.map(col => col.slots))
    localStorage.setItem('gameState', arr2D)
  }

  arraysToBoard() {
    if (localStorage.getItem('gameState')) {
      let arr2D = JSON.parse(localStorage.getItem('gameState'))
      arr2D.forEach((col, i) => {
        this.columns[i].restore(col)
      })
    }
  }

  saveGameState() {
    let state = {
      player1: this.player1,
      player2: this.player2,
      currentPlayer: this.currentPlayer,
      winnerNum: this.winnerNumber,
    }
    localStorage.setItem('state', JSON.stringify(state));
  }

  restoreGameState() {
    if (localStorage.getItem('state')) {
      let {
        player1,
        player2,
        currentPlayer,
        winnerNum
      } = JSON.parse(localStorage.getItem('state'));

    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = currentPlayer;
    this.winnerNumber = winnerNum;
    }
  }
}


// SOLELY RESPONSIBLE FOR MANAGING THE STATE OF GAME
