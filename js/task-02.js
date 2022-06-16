const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItem = document.querySelector("#ingredients");

const element = ingredients.map((el) => {
  const ingredientsLi = document.createElement("li");
  ingredientsLi.classList.add("item");
  ingredientsLi.textContent = el;

  return ingredientsLi;
});

ingredientsItem.append(...element);
console.log(ingredientsItem);

// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
