
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="//unpkg.com/brain.js"></script>

    <title>Tensor Flow JS</title>
  </head>
  <body>
    <div id="diagram"></div>
    <script type="module" src="./src/js/app.js"></script>
  </body>
</html>


const net = new brain.NeuralNetwork();

//  XOR
net.train([
  {
    input: [0, 0],
    output: [0],
  },
  {
    input: [1, 0],
    output: [1],
  },
  {
    input: [0, 1],
    output: [1],
  },
  {
    input: [1, 1],
    output: [0],
  },
]);

console.log(net.run([0, 0]));
console.log(net.run([1, 0]));
console.log(net.run([0, 1]));
console.log(net.run([1, 1]));

const diagram = document.getElementById("diagram");

try {
  diagram.innerHTML = brain.utilities.toSVG(net);
} catch (e) {
  console.error("Error generating SVG:", e);
}
