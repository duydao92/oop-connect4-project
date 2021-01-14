import { Board } from './board.js'
import { Game } from './game.js'

let game;

window.addEventListener('DOMContentLoaded', event => {
  const playerForm = document.getElementById('form-holder');
  const p1Input = document.getElementById('player-1-name');
  const p2Input = document.getElementById('player-2-name');
  const newGameBtn = document.getElementById('new-game');

  playerForm.addEventListener('keyup', event => {
      if((p1Input.value !== "") && (p2Input.value !== "")){
        newGameBtn.disabled = false;
      }
  })

});
