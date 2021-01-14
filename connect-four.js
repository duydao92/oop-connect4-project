import { Board } from './board.js'
import { Game } from './game.js'


window.addEventListener('DOMContentLoaded', event => {
  let game;
  console.log(game)
  const playerForm = document.getElementById('form-holder');
  const p1Input = document.getElementById('player-1-name');
  const p2Input = document.getElementById('player-2-name');
  const newGameBtn = document.getElementById('new-game');
  const gameName = document.getElementById('game-name');

  function updateUI() {
    if (game === undefined) {
      document.getElementById('board-holder').classList.add('is-invisible');
      // boardHolder.setAttribute('class', 'is-invisible');
    } else {
      // boardHolder.classList.remove('is-invisible');
      document.getElementById('board-holder').classList.remove('is-invisible');
      gameName.innerHTML = game.getName();
    }
  }

  playerForm.addEventListener('keyup', event => {
      if((p1Input.value !== "") && (p2Input.value !== "")){
        newGameBtn.disabled = false;
      }
  })

  newGameBtn.addEventListener ('click', e => {
    console.log(p1Input.value)
    console.log(p2Input.value)
    game = new Game(p1Input.value, p2Input.value);
    console.log(game)
    updateUI()
    p1Input.value = '';
    p2Input.value = '';
    newGameBtn.disabled = true;
  })



});
