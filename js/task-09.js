// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

const btnEl = document.querySelector("button");
const spanContentEl = document.querySelector("span");

function getRandomHexColor() {
  return `#${
    Math.floor(Math.random() * 16777215).toString(16)
    // .padStart(6, 0)
  }`;
}

function changeBodyBgrColor(event) {
  const getRandomColorValue = getRandomHexColor();
  document.body.style.backgroundColor = getRandomColorValue;
  spanContentEl.textContent = getRandomColorValue;
}

btnEl.addEventListener("click", changeBodyBgrColor);
