const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

console.log(input);
console.log(output);

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (input.value === "") {
    return (output.textContent = "Anonymous");
  }
  output.textContent = event.currentTarget.value;
}

