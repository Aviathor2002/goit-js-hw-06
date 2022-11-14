const sizeControl = document.querySelector("#font-size-control");
console.log(sizeControl);
const text = document.querySelector("#text");
console.log(text);

sizeControl.addEventListener("input", onSizeChsnge);

function onSizeChsnge(event) {
  text.style.fontSize = event.currentTarget.value + "px";
  console.log(sizeControl.value);
}
