'use strict';

const fullGame = document.querySelector('.full-game-board');
const board = document.querySelector('.game-grid');
const resetGameButton = document.querySelector('.reset-button');

let numberOfDragons = 10;
let flags = 0;
let isGameOver = false;

const generateDragons = () => {
  for (let i = 0; i < 48; i++) {
    // console.log(i);
    const tile = document.createElement('div');
    tile.classList.add('game-grid-square');
    if (Math.random() < 0.2) {
      tile.classList.add('dragon');
      console.log(i);
    }
    tile.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(tile.classList);
      if (tile.classList.length === 1) {
        tile.style.backgroundColor = '#a5a6f6';
      } else {
        tile.style.backgroundImage = "url('/images/Dragonsweeper-tile.png)";
        tile.style.backgroundColor = '#a5a6f6';
      }
    });
    board.appendChild(tile);
  }
};
generateDragons();
