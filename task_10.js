function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const getBox = document.querySelector("#boxes");

console.log(btnCreate);

btnCreate.addEventListener("click", getAmmount);
btnDestroy.addEventListener("click", destroyAmmount);

function getAmmount() {
  const number = inputNum.value;
  console.log(number);

  return createBoxes(number);
}

function createBoxes(ammount) {
  let boxSize = 30;

  let str = `<div style="width:${boxSize}px; height:${boxSize}px; background:${getRandomHexColor()}"></div>`;
  let box = "";
  for (let i = 0; i < ammount; i += 1) {
    box += str;
    boxSize += 10;
    str = `<div style="width:${boxSize}px; height:${boxSize}px; background:${getRandomHexColor()}"></div>`;
    console.log(str);
  }
  getBox.insertAdjacentHTML("afterbegin", box);
}

// const ammount = inputNum.value;
// console.log(ammount);

function destroyAmmount() {
  getBox.textContent = "";
  inputNum.value = 0;
}
