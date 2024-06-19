function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let btnChangeColor = document.querySelector(".change-color");

let btnChangeColorClickHandler = (event) => {
  const randomColor = getRandomHexColor();
  const spanColor = document.querySelector(".color");
  document.body.style.backgroundColor = randomColor;
  spanColor.style.color = randomColor;
};
btnChangeColor.addEventListener("click", btnChangeColorClickHandler)
