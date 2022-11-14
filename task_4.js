const incrBtn = document.querySelector('[data-action="increment"]');

const decrBtn = document.querySelector('[data-action="decrement"]');

const valueEl = document.querySelector("#value");
value.textContent = 0;

// incrBtn.addEventListener("click", () => (value.textContent += 1));
// decrBtn.addEventListener("click", () => (value.textContent -= 1));

const counter = {
  value: 0,

  increase() {
    this.value += 1;
  },

  decrease() {
    this.value -= 1;
  },
};

incrBtn.addEventListener("click", () => {
  counter.increase();
  value.textContent = counter.value;
});
decrBtn.addEventListener("click", () => {
  counter.decrease();
  value.textContent = counter.value;
});
