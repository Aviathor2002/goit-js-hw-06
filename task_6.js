const input = document.querySelector("#validation-input");
const inputLength = input.dataset.length;
console.log(input);
console.log(inputLength);

input.addEventListener("blur", onInputRevise);

function onInputRevise(event) {
  if (event.currentTarget.value.length < inputLength) {
    console.log(event.currentTarget.value.length);
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
