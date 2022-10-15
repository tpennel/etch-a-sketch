const grid = document.querySelector('.grid');

const gridSize = 16;
const color = 'black';

function makeGrid(num) {
  for (let i = 0; i < (num * num); i++) {
    grid.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr)`);
    const cellNode = document.createElement('div');
    const node = document.createTextNode(``);
    cellNode.appendChild(node);
    cellNode.classList.add('cell');
    cellNode.classList.add('hover');
    grid.appendChild(cellNode);
  }
  backgroundBlack();
}

function backgroundBlack() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.classList.add('black');
  }));
}

function backgroundMulti() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.classList.add('black');
  }));
}

function backgroundChoice(color) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.classList.add(color);
  }));
}

function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  console.log(r, g, b);
  return (r, g, b);
}

function resize() {
  let size = prompt('How big to you want the grid?');
  while (size > 100) {
    size = prompt('Needs to be under 100!')
  }
  grid.textContent = '';
  makeGrid(size);
}


makeGrid(gridSize);
