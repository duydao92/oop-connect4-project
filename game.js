// SOLELY RESPONSIBLE FOR MANAGING THE STATE OF GAME

export class Game {
  constructor (player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 1;
  }

  getName(){ // return a string of player names
      return `${this.player1} VS. ${this.player2}`
  }

  playInColumn(click){
    if(this.currentPlayer === 1){
      this.currentPlayer = 2;
    } else {
       this.currentPlayer = 1;
    }
  }
}
