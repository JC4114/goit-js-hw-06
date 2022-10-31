// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", ({ target }) => {
  const stringValue = target.value.trim();
  output.textContent = stringValue === "" ? "Anonymous" : stringValue;
});

// input.addEventListener("input", (event) => {
//   output.textContent = event.target.value;

//   if (event.target.value === "") {
//     output.textContent = "Anonymous";
//   }
// });
