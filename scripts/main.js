'use strict';

const fullGame = document.querySelector('.full-game-board');
const board = document.querySelector('.game-grid');
const resetGameButton = document.querySelector('.reset-button');

let numberOfDragons = 10;
let flags = 0;

const generateDragons = () => {
  for (let i = 0; i < 36; i++) {
    // console.log(i);
    let tile = document.createElement('div');
    tile.classList.add('game-grid-square');
    if (Math.random() < 0.2) {
      tile.classList.add('dragon');
      console.log(i);
    }
    tile.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(tile.classList);
      console.log(e.target);
      if (tile.classList.length === 1) {
        tile.style.backgroundColor = '#a5a6f6';
      } else {
        tile.style.backgroundImage = "url('/images/Dragonsweeper-tile.png')";
        fullGame.classList.add('game-over-box');
        if (fullGame.classList.length === 2) {
          const fire = document.createElement('audio');
          board.appendChild(fire);
          fire.play();
          // fire.loop = false;
          console.log(fullGame.classList);
          fullGame.style.backgroundImage = "url('/images/flames.jpg')";
        }
      }
    });
    board.appendChild(tile);
  }
};
generateDragons();

resetGameButton.addEventListener('click', (e) => {
  e.preventDefault();
  const resetTiles = document.querySelectorAll('.game-grid-square');
  resetTiles.forEach((tile) => {
    tile.remove('game-grid-square');
    fullGame.style.backgroundImage = 'none';
  });
  generateDragons();
});
