const body = document.querySelector("body");
const mainContainer = document.querySelector("#main-container");

for (let i = 1; i <= 16 * 16; i++) {
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

function userInput() {}
