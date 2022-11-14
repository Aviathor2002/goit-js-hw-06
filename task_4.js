const incrBtn = document.querySelector('[data-action="increment"]');

const decrBtn = document.querySelector('[data-action="decrement"]');

const valueEl = document.querySelector("#value");

const counter = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

incrBtn.addEventListener("click", (event) => {
  counter.increment();
  return (valueEl.textContent = counter.value);
});

decrBtn.addEventListener("click", (event) => {
  counter.decrement();
  return (valueEl.textContent = counter.value);
});

// incrBtn.addEventListener("click", () => (value.textContent += 1));
// decrBtn.addEventListener("click", () => (value.textContent -= 1));
