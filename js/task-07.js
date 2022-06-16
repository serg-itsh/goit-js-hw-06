// Задание 7
// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputId = document.querySelector("#font-size-control");
const currInput = document.querySelector("#text");
//  currInput.style.fontSize = '80px';
// let newText = currInput.style.fontSize

// console.log(currInput.style);
// console.dir(inputId);

inputId.addEventListener("input", (inputRange) => {
  // console.dir(inputRange.target.value);
  // console.dir(inputRange);
  currInput.style.fontSize = `${inputRange.target.value}px`;
  // const newRang = inputRange.target.value
  // console.log(newRang + px);

  // console.log(currInput.style.fontSize);
});
// currInput.style.fontSize = `${newRang}px`;
