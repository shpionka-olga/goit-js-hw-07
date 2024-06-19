function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const initWidth = 30;
  const initHeight = 30;
  let newBoxesArray = [];

  const boxes = document.querySelector("#boxes");
  for (let index = 0; index < amount; index++) {
    let newBox = document.createElement("div");
    newBox.style.width = `${initWidth + index * 10}px`;
    newBox.style.height = `${initHeight + index * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.className = 'box';
    newBoxesArray.push(newBox.outerHTML);
  }
  boxes.innerHTML = newBoxesArray.join("");
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
}

// Create button click actions
const createBtn = document.querySelector('button[data-create]');
const createHandler = (event) => {
  const input = document.querySelector("input");
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
  input.value = input.defaultValue;
}
createBtn.addEventListener("click", createHandler);

// Destroy button click actions
const destroyBtn = document.querySelector('button[data-destroy]');
const destroyHandler = (event) => {
  destroyBoxes();
  const input = document.querySelector("input");
  input.value = input.defaultValue;
}
destroyBtn.addEventListener("click", destroyHandler);
