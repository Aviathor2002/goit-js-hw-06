// const input = document.querySelectorAll("label");
// console.log(input);

// const button = document.querySelector("button");
// console.log(button);

// button.addEventListener("click", onFormSubmit);

const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });
  event.currentTarget.reset();

  //   const formElement = event.currentTurget.elements;

  //   const mail = formElement.email.value;
  //   const password = formElement.password.value;

  //   console.log(mail, password);
}

//

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTurget);

//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log({
//       [name]: value,
//     });
//   });
// }
