// SOLELY RESPONSIBLE FOR MANAGING THE STATE OF GAME

export class Game {
  constructor (player1, player2){
    this.player1 = player1;
    this.player2 = player2;
  }

  getName(){ // return a string of player names
      return `${this.player1} VS. ${this.player2}`
  }
}
