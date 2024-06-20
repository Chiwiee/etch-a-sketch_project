const body = document.querySelector("body");
const mainContainer = document.querySelector("#main-container");
const inputBtn = document.querySelector("#input");

for (let i = 0; i < 16 * 16; i++) {
  const mainGrid = document.createElement("div");
  mainGrid.classList = "mainSquare";
  box.appendChild(mainGrid);
  mainContainer.appendChild(box);
}
inputBtn.addEventListener("click", () => {
  function userInputX() {
    let inputX = prompt("Grid X: Enter a Number");
    let maximum = 100;
    if (inputX <= maximum) {
      return inputX;
    }
  }

  function userInputY() {
    let inputY = prompt("Grid Y: Enter a Number");
    let maximum = 100;
    if (inputY <= maximum) {
      return inputY;
    }
  }

  function getInputValue(gridX, gridY) {
    for (let i = 1; i <= gridX; i++) {
      const gridSX = document.createElement("div");
      gridSX.classList = "box";
      mainContainer.appendChild(gridSX);
    }
    for (let i = 1; i <= gridY; i++) {
      const gridSX = document.querySelectorAll(".box");
      gridSX.forEach((gridSX) => {
        const gridSY = document.createElement("div");
        gridSY.classList = "square";
        gridSX.appendChild(gridSY);
      });
    }
  }

  const gridX = userInputX();
  const gridY = userInputY();
  getInputValue(gridX, gridY);

  let divs = document.querySelectorAll(".square");
  console.log(divs);
  divs.forEach((divs) => {
    divs.addEventListener("mouseout", (e) => {
      e.target.style.background = "black";
    });
  });
});
