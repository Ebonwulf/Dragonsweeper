'use strict';

const fullGame = document.querySelector('.full-game-board');
const board = document.querySelector('.game-grid');
const resetGameButton = document.querySelector('.reset-button');
const textDisplay = document.querySelector('.main-text-heading-display');
const textDisplayBox = document.querySelector('.main-heading-box');

const generateDragons = () => {
  for (let i = 0; i < 64; i++) {
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
const tiles = document.querySelectorAll('.game-grid-square');

resetGameButton.addEventListener('click', (e) => {
  e.preventDefault();
  // const resetTiles = document.querySelectorAll('.game-grid-square');
  board.style.display = 'grid';
  tiles.forEach((tile) => {
    tile.remove('game-grid-square');
    fullGame.style.backgroundImage = 'none';
    textDisplayBox.style.backgroundColor = '#6d02c0';
    textDisplay.innerHTML = `Ebon's Dragonsweeper <br /> don't get burnt!`;
  });
  generateDragons();
});

const gameOver = () => {
  if (fullGame.classList.length === 2) {
    fullGame.style.backgroundImage = "url('/images/flames-2.jpg')";
    // const fire = `<audio src="/mixkit-fire-swoosh-burning-1328.wav"></audio>`;
    const sound = new Audio('../94102__cgeffex__fire-breathing-dragon.flac');
    sound.play();

    console.log(fullGame.classList);
    textDisplayBox.style.backgroundColor = 'red';
    textDisplay.innerHTML = 'GAME OVER!';
  }
};

const gameWin = () => {
  if (fullGame.classList.length === 1) {
    textDisplay.innerHTML = 'YOU WIN!';
    textDisplayBox.style.backgroundColor = 'rgb(12, 255, 4)';
    fullGame.style.backgroundImage = "url('/images/smile.png')";
    console.log(fullGame.classList);
    if (board.style.display === 'none') {
      board.style.display = 'block';
    } else {
      board.style.display = 'none';
    }
  }
};

// const revealDragons = () => {
//   const dragon = document.querySelectorAll('.dragon');
//   if () {
//     dragon.style.backgroundImage = "url('/images/Dragonsweeper-tile.png)";
//   }
//   console.log(dragon);
// };
