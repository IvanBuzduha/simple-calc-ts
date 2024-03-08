const num1 = document.querySelector(".num1") as HTMLInputElement;
const num2 = document.querySelector(".num2") as HTMLInputElement;
const add = document.querySelector(".add") as HTMLButtonElement;
const sub = document.querySelector(".sub") as HTMLButtonElement;
const mult = document.querySelector(".multiply") as HTMLButtonElement;
const div = document.querySelector(".divide") as HTMLButtonElement;
const result = document.querySelector(".result") as HTMLOutputElement;

// function addF() {
//   let a = parseFloat(num1.value);
//   let b = parseFloat(num2.value);
//   let result = a + b;
//   printResult.textContent = result.toString();
// }
// add.addEventListener("click", addF);

function addF(): void {
  result.textContent = (parseFloat(num1.value) + parseFloat(num2.value)).toString();
}
add.addEventListener("click", addF);
function subF(): void {
  result.textContent = (parseFloat(num1.value) - parseFloat(num2.value)).toString();
}
sub.addEventListener("click", subF);
function multF(): void {
  result.textContent = (parseFloat(num1.value) * parseFloat(num2.value)).toString();
}
mult.addEventListener("click", multF);
function divF(): void {
  result.textContent = (parseFloat(num1.value) / parseFloat(num2.value)).toString();
}
div.addEventListener("click", divF);
