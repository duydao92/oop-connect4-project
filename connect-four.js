import { Columns } from './columns.js'
import { Game } from './game.js'


window.addEventListener('DOMContentLoaded', event => {
  let game;
  const playerForm = document.getElementById('form-holder');
  const p1Input = document.getElementById('player-1-name');
  const p2Input = document.getElementById('player-2-name');
  const newGameBtn = document.getElementById('new-game');
  const gameName = document.getElementById('game-name');
  const clickTargets = document.getElementById('click-targets');

  function updateUI() {
    if (game === undefined) {
      document.getElementById('board-holder').classList.add('is-invisible');
    } else {
      document.getElementById('board-holder').classList.remove('is-invisible');
      gameName.innerHTML = game.getName();
    }
    if(game.currentPlayer === 1){

    }
  }

  playerForm.addEventListener('keyup', event => {
      if((p1Input.value !== "") && (p2Input.value !== "")){
        newGameBtn.disabled = false;
      }
  })

  newGameBtn.addEventListener ('click', e => {
    game = new Game(p1Input.value, p2Input.value);
    updateUI()
    p1Input.value = '';
    p2Input.value = '';
    newGameBtn.disabled = true;
  })

  clickTargets.addEventListener('mouseover', event => {
    if(event.target.classList.contains('click-target')){
        if(game.currentPlayer === 1){
          event.target.style.backgroundColor = 'black';
        } else {
          event.target.style.backgroundColor = 'red';
        }
    }
  });

  clickTargets.addEventListener('mouseout', event => {

     event.target.style.backgroundColor = '';
  });

  clickTargets.addEventListener('click', event => {
      game.playInColumn();
      updateUI();
  })

});