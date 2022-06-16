const itemEl = document.querySelectorAll(".item");
console.dir(itemEl);
// const itemElLength = itemEl.forEach(el => console.log(el));

// console.log(itemElLength);
const sumEl = itemEl.length;
console.log("Number of categories:", sumEl);
const nameEl = document.querySelectorAll("h2");

// console.log('Category:', nameEl.textContent);
itemEl.forEach((el, idx) => {
  const listResult = el.querySelectorAll("li");
  // console.log(listResult);
  console.log(
    ` Category: ${nameEl[idx].textContent}\n Elements: ${listResult.length}`
  );
});

// const itemEl2 = nameEl.querySelector('li');

// console.log(itemEl2);

// const itemEl3 = (itemEl.lastElementChild)

// console.log(itemEl3);

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
