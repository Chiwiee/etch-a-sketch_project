const body = document.querySelector("body");
const mainContainer = document.querySelector("#main-container");

for (let i = 1; i <= 16 * 16; i++) {
  const div = document.createElement("div");
  mainContainer.appendChild(div);
}

console.log(mainContainer);
