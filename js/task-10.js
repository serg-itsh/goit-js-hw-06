function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const idDiv = document.querySelector('.controls');
const input = document.querySelector("input");
const butOne = document.querySelector("button[data-create]");
const butTwo = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

butOne.addEventListener("click", (event) => {
  createBoxes(input.value);
});

butTwo.addEventListener("click", (event) => {
  divBox.innerHTML = "";
  input.value = "";
});

function createBoxes(amount) {
  const startSize = 30;
  if (amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const newBox = document.createElement("div");
      newBox.style.width = `${startSize + i * 10}px`;
      newBox.style.height = `${startSize + i * 10}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.margn = "10px";
      newBox.style.border = "2px";
      // startSize += 10;
      divBox.append(newBox);
      console.dir();
    }
  } else {
    alert("Max value 100");
  }
}

// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку
// Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию
// getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все
// созданные элементы.
