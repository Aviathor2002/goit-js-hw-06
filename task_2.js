const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul");

const ingridientsList = [];

ingredients.forEach((ingredient) => {
  const createIngr = document.createElement("li");
  createIngr.textContent = ingredient;
  createIngr.classList.add("item");
  ingridientsList.push(createIngr);

  console.log(createIngr);
});

console.log(ingridientsList);
list.append(...ingridientsList);

//

// const ingridientsList = ingredients.map((ingredient) => {
//   const createIngr = document.createElement("li");
//   createIngr.textContent = ingredient;
//   createIngr.classList.add("item");
//   return createIngr;
// });

// console.log(ingridientsList);
// list.append(...ingridientsList);

//

// const makeIngridientsList = (elements) => {
//   return elements.map((element) => {
//     const createEl = document.createElement("li");
//     createEl.textContent = element;
//     createEl.classList.add("item");
//     return createEl;
//   });
// };

// const createIngridientsList = makeIngridientsList(ingredients);

// console.log(createIngridientsList);

// list.append(...createIngridientsList);
