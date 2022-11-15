function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const buttonColor = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

console.log(bodyColor);
console.log(buttonColor);
console.log(colorValue);

buttonColor.addEventListener("click", onColorChange);

function onColorChange(event) {
  const randCol = getRandomHexColor();

  bodyColor.style.backgroundColor = randCol;
  colorValue.textContent = randCol;
}
