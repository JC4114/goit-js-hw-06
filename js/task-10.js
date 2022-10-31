const createButton = document.querySelector("button[data-create]");
const removeButton = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
let amount = 0;

input.addEventListener("input", (e) => handelInput(e));
createButton.addEventListener("click", () => createBoxes(amount));
removeButton.addEventListener("click", () => removeBoxes());

function createBoxes(amount) {
  let size = 30;
  boxes.innerHTML = "";
  for (let i = 0; i < amount; i += 1, size += 10) {
    const container = document.createElement("div");
    container.style.height = `${size}px`;
    container.style.width = `${size}px`;
    container.style.background = getRandomHexColor();
    boxes.append(container);
  }
}
function removeBoxes() {
  boxes.textContent = "";
}

function handelInput(e) {
  amount = e.target.value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
