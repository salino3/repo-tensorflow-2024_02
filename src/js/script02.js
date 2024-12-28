const net = new brain.NeuralNetwork();

//  XOR
const data = [
  { "input": { "r": 0, "g": 0, "b": 0 }, "output": [1] },
  { "input": { "r": 1, "g": 1, "b": 1 }, "output": [0] },
];

net.train(data);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");

let color;

// Random color
function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  colorEl.style.backgroundColor = `rgb(
    ${Math.floor(color.r * 255)},
    ${Math.floor(color.g * 255)}, 
    ${Math.floor(color.b * 255)})`;
}

printButton.addEventListener("click", setRandomColor);

setRandomColor();

// console.log(net.run({ r: 1, g: 0.5, b: 0 }));
