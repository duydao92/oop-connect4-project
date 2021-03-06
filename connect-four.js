import {
  Game
} from './game.js'


window.addEventListener('DOMContentLoaded', () => {
  let game;
  const playerForm = document.getElementById('form-holder');
  const p1Input = document.getElementById('player-1-name');
  const p2Input = document.getElementById('player-2-name');
  const newGameBtn = document.getElementById('new-game');
  const gameName = document.getElementById('game-name');
  const clickTargets = document.getElementById('click-targets');

  if (localStorage.getItem('gameState') !== "") { //Check local storage to see if game state is saved.
    game = new Game(p1Input.value, p2Input.value);//Init new game obj.
    game.arraysToBoard();                         //repopulate tokens on board
    game.restoreGameState()                       // repopulate players and and turns
    updateUI();                                   //Update display based on game obj.
    p1Input.value = '';
    p2Input.value = '';
    newGameBtn.disabled = true;
    if (game.winnerNumber !== 0) {
      newGameBtn.disabled = false;
    }
  }

  function updateUI() {
    if (game === undefined) { //Make board visible.
      document.getElementById('board-holder').classList.add('is-invisible');
    } else {
      document.getElementById('board-holder').classList.remove('is-invisible');
      gameName.innerHTML = game.getName();
    }

    for (let i = 0; i <= 5; i++) { //Populate tokens.
      for (let j = 0; j <= 6; j++) {
        let tokenSquare = document.getElementById(`square-${i}-${j}`);
        let value = game.getTokenAt(i, j)
        tokenSquare.innerHTML = '';
        let token = document.createElement('div');
        if (value === 1) {
          token.classList.add('token', 'black')
        } else if (value === 2) {
          token.classList.add('token', 'red')
        } else {}
        tokenSquare.appendChild(token)
      }
    }
  }

  // ----------- PLAYER INPUTS PRIOR TO GAME START ------------ //
  playerForm.addEventListener('keyup', () => {
    if (p1Input.value && p2Input.value) {
      newGameBtn.disabled = false;
    }
  })

  newGameBtn.addEventListener('click', () => {
    localStorage.clear() //Reset board memory.
    game = new Game(p1Input.value, p2Input.value); //Init new game obj.
    updateUI()
    p1Input.value = '';
    p2Input.value = '';
    newGameBtn.disabled = true;
  })

  // ------ MOUSE EVENTS FOR PLAYER COLUMN SELECTIONS (UI) ------ //
  clickTargets.addEventListener('mouseover', event => {
    if (event.target.classList.contains('click-target')) {
      if (game.currentPlayer === 1) {
        event.target.style.backgroundColor = 'black';
      } else {
        event.target.style.backgroundColor = 'red';
      }
    }
  });

  clickTargets.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = '';
  });
  // ------------------------------------------------------------- //

  // ---------------- PLAYER COLUMN CHOICE -----------------------//
  clickTargets.addEventListener('click', event => {
    if (event.target.classList.contains('click-target')) { // && isValidMove()
      let columnNum = Number(event.target.id.split('-')[1]);

      if (!game.columns[columnNum].isFull()) {
        game.playInColumn(columnNum);
        updateUI();
      }
    }
  });
});
