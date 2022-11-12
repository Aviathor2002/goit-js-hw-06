const listCat = document.querySelector("ul");

const countCat = listCat.querySelectorAll("li.item");

console.log("Number of categories:", countCat.length);

countCat.forEach((item) => {
  const catName = item.querySelector("h2").innerText;
  console.log("Category:", catName);
  const counEl = item.querySelectorAll("li").length;
  console.log("Elements:", counEl);
});
