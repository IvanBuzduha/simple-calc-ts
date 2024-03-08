"use strict";
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const mult = document.querySelector(".multiply");
const div = document.querySelector(".divide");
const result = document.querySelector(".result");
// function addF() {
//   let a = parseFloat(num1.value);
//   let b = parseFloat(num2.value);
//   let result = a + b;
//   printResult.textContent = result.toString();
// }
// add.addEventListener("click", addF);
function addF() {
    result.textContent = (parseFloat(num1.value) + parseFloat(num2.value)).toString();
}
add.addEventListener("click", addF);
function subF() {
    result.textContent = (parseFloat(num1.value) - parseFloat(num2.value)).toString();
}
sub.addEventListener("click", subF);
function multF() {
    result.textContent = (parseFloat(num1.value) * parseFloat(num2.value)).toString();
}
mult.addEventListener("click", multF);
function divF() {
    result.textContent = (parseFloat(num1.value) / parseFloat(num2.value)).toString();
}
div.addEventListener("click", divF);
//# sourceMappingURL=index.js.map