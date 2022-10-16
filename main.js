const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');
const sliderNum = document.querySelector('.gridSize');
const blackButton = document.querySelector('.blackButton');
const randomButton = document.querySelector('.randomButton');
const choiceButton = document.querySelector('.choiceButton');
const colorSelector = document.querySelector('.colorSelector');

let gridSize = slider.value;
sliderNum.innerHTML = gridSize;
let colorChoice = '';

//Update the visual value and grid size based on the slider
slider.oninput = function() {
  sliderNum.innerHTML = this.value;
  gridSize = this.value;
  makeGrid(this.value);
}

//Allow for someone ot choose their own color
colorSelector.oninput = function() {
  colorChoice = this.value;
}

// Choose the fill-in color
let fillinColor = 'black';

blackButton.addEventListener('click', () => {
  fillinColor = 'black';
  makeGrid(gridSize, fillinColor);
});

randomButton.addEventListener('click', () => {
  fillinColor = 'random';
  makeGrid(gridSize, fillinColor);
});

choiceButton.addEventListener('click', () => {
  fillinColor = 'choice';
  makeGrid(gridSize, fillinColor);
})

function makeGrid(num, color) {
  grid.textContent = '';
  for (let i = 0; i < (num * num); i++) {
    grid.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr)`);
    const cellNode = document.createElement('div');
    const node = document.createTextNode(``);
    cellNode.appendChild(node);
    cellNode.classList.add('cell');
    cellNode.classList.add('hover');
    grid.appendChild(cellNode);
  }
  
  changeColor(color);
}

function changeColor() {
  if (fillinColor === 'black')
    fillinBlack();
  else if (fillinColor === 'random')
    fillinRandom();
  else
    fillinChoice();
}

function fillinBlack() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.setAttribute('style', 'background-color: black');
  }));
}

function fillinRandom() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    const color = randomColor();
    cell.setAttribute('style', 'background-color: ' + color);
  }));
}

function fillinChoice() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    const color = 
    cell.setAttribute('style', 'background-color: ' + colorChoice);
  }));
}

function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return (`rgb(${r}, ${g}, ${b})`);
}

makeGrid(gridSize, fillinColor);