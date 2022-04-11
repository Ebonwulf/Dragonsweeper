'use strict';

const fullGame = document.querySelector('.full-game-board');
const board = document.querySelector('.game-grid');
const resetGameButton = document.querySelector('.reset-button');
const textDisplay = document.querySelector('.main-text-heading-display');
const textDisplayBox = document.querySelector('.main-heading-box');

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
        gameOver();
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
    textDisplayBox.style.backgroundColor = '#6d02c0';
    textDisplay.innerHTML = `Ebon's Dragonsweeper <br /> don't get burnt!`;
  });
  generateDragons();
});

const gameOver = () => {
  if (fullGame.classList.length === 2) {
    fullGame.style.backgroundImage = "url('/images/flames.jpg')";
    const fire = `<audio src="/mixkit-fire-swoosh-burning-1328.wav"></audio>`;
    const tile = document.querySelectorAll('.game-grid-square');
    tile.innerHTML += fire;
    // fire.loop = false;
    console.log(fire);
    console.log(fullGame.classList);
    textDisplayBox.style.backgroundColor = 'red';
    textDisplay.innerHTML = 'GAME OVER!';
  }
};

const gameWin = () => {
  textDisplay.innerHTML = 'YOU WIN!';
  textDisplayBox.style.backgroundColor = 'Green';
};
