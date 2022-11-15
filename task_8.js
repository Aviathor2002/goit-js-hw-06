// const form = document.querySelector(".login-form");
// console.log(form);
// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }

//   console.log({
//     [email.name]: email.value,
//     [password.name]: password.value,
//   });
//   event.currentTarget.reset();
// }

//

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formElements = event.currentTarget.elements;
//   console.log(formElements);

//   const mail = formElements.email;
//   const password = formElements.password;

//   if (mail.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }

//   console.log({
//     [mail.name]: mail.value,
//     [password.name]: password.value,
//   });
//   event.currentTarget.reset();
// }

//

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    if (value === "") {
      return alert("Please fill in all the fields!");
    }
    console.log({ [name]: value });
  });
  event.currentTarget.reset();
}

// ! так і не розібрався як таким методом через
// ! formData зробить щоб в консолі було в одному
// ! об'єкті, з попередніми методами все вийшло здається
