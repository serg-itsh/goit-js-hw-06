function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorButton = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body');
console.dir(spanColor);


colorButton.addEventListener('click', (event) => {
  console.dir(event);
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();


})


// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через 
// инлайн стиль при клике на button.change - color и выводит значение цвета в
// span.color.

// <div class="widget">
//   <p>Background color: 
        // <span class="color">-</span>
    // </p >
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }



// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRangomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }







