const body = document.querySelector("body");
const mainContainer = document.querySelector("#main-container");
const inputBtn = document.querySelector("#input");

let grid = document.querySelectorAll(".div");
console.log(grid);
grid.forEach((grid) => {
  grid.addEventListener("mouseout", (e) => {
    e.target.style.background = "black";
  });
});

function userInputX() {
  let inputX = prompt("Enter a Number");
  let maximum = 100;
  if (inputX <= maximum) {
    return inputX;
  }
}

function userInputY() {
  let inputY = prompt("Enter a Number");
  let maximum = 100;
  if (inputY <= maximum) {
    return inputY;
  }
}

function getInputValue(gridX, gridY) {
  for (let i = 1; i <= gridX * gridY; i++) {
    const div = document.createElement("div");
    div.classList = "div";
    mainContainer.appendChild(div);
  }
}

const gridX = userInputX();
console.log(gridX);
const gridY = userInputY();
console.log(gridY);
getInputValue();
