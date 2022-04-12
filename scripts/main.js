'use strict';

const fullGame = document.querySelector('.full-game-board');
const board = document.querySelector('.game-grid');
const resetGameButton = document.querySelector('.reset-button');
const textDisplay = document.querySelector('.main-text-heading-display');
const textDisplayBox = document.querySelector('.main-heading-box');
let isGameOver = false;
let dragonCount = 0;
let tileCount = 0;
const generateDragons = () => {
  for (let i = 0; i < 64; i++) {
    // console.log(i);
    let tile = document.createElement('div');
    tile.classList.add('game-grid-square');
    if (Math.random() < 0.2) {
      tile.classList.add('dragon');
      console.log(i);
      dragonCount++;
      console.log(dragonCount);
    }
    tile.addEventListener('click', (e) => {
      if (isGameOver) {
        return;
      }
      e.preventDefault();
      console.log(tile.classList);
      console.log(e.target);
      if (tile.classList.length === 1) {
        tile.style.backgroundColor = '#a5a6f6';
        tileCount++;
        console.log(tileCount);
      } else {
        tile.style.backgroundImage = "url('../images/Dragonsweeper-tile.png')";
        fullGame.classList.add('game-over-box');
        gameOver();
      }
    });
    board.appendChild(tile);
  }
};
generateDragons();

resetGameButton.addEventListener('click', (e) => {
  isGameOver = false;
  dragonCount = 0;
  tileCount = 0;
  e.preventDefault();
  const resetTiles = document.querySelectorAll('.game-grid-square');
  board.style.display = 'grid';
  resetTiles.forEach((tile) => {
    tile.remove('game-grid-square');
    fullGame.style.backgroundImage = 'none';
    textDisplayBox.style.backgroundColor = '#6d02c0';
    textDisplay.innerHTML = `Ebon's Dragonsweeper <br /> don't get burnt!`;
  });
  generateDragons();
});

const gameOver = () => {
  isGameOver = true;
  if (fullGame.classList.length === 2) {
    fullGame.style.backgroundImage = "url('../images/flames-2.jpg')";

    const sound = new Audio('../94102__cgeffex__fire-breathing-dragon.flac');
    sound.play();
    console.log(fullGame.classList);
    textDisplayBox.style.backgroundColor = 'red';
    textDisplay.innerHTML = 'GAME OVER!';
  }
};

// const gameWin = () => {
//   isGameOver = true;
//   if (tileCount = 64 - dragonCount && !fullGame.classList.length === 2) {
//     textDisplay.innerHTML = 'YOU WIN!';
//     textDisplayBox.style.backgroundColor = 'rgb(12, 255, 4)';
//     fullGame.style.backgroundImage = "url('../images/smile.png')";
//     console.log(fullGame.classList);
//   }
// };

// const minesGenerated = () => {};
// const revealDragons = () => {};
