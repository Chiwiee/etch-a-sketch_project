const body = document.querySelector("body");
const mainContainer = document.querySelector("#main-container");

for (let i = 1; i <= userInput; i++) {
  const div = document.createElement("div");
  div.classList = "div";
  mainContainer.appendChild(div);
}

console.log(mainContainer);

let grid = document.querySelectorAll(".div");
console.log(grid);
grid.forEach((grid) => {
  grid.addEventListener("mouseout", (e) => {
    e.target.style.background = "black";
  });
});

function userInput() {
  let input = prompt("Please Enter a Number");
  let maximum = 100;
  if (input < maximum) {
    return input;
  } else if (input > maximum) {
    return (input = prompt("Please Enter a Number"));
  }
}

let userInput = userInput();
