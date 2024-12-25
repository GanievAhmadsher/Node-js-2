// * ========================= Homework ========================= export

// ? ========================= 1-MASHQ ========================= create
export function _Hello() {
  console.log("Salom...");
}
// ? ========================= 1-MASHQ ========================= create

// ? ========================= 2-MASHQ ========================= create
export function _Add(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}
export function _Subtraction(num1, num2) {
  let result = num1 - num2;
  console.log(result);
}
// ? ========================= 2-MASHQ ========================= create

// ? ========================= 3-MASHQ ========================= create
export const person = { name: "Ahror", age: 23 };
// ? ========================= 3-MASHQ ========================= create

// ? ========================= 4-MASHQ ========================= create
const student = { name: "Aliyor", age: 22, kurs: 2, sohasi: "IT" };
export default student;
// ? ========================= 4-MASHQ ========================= create

// ? ========================= 5-MASHQ ========================= create
export const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ? ========================= 5-MASHQ ========================= create

// ? ========================= 6-MASHQ ========================= create
function add6(num1, num2) {
  let result = num1 + num2;
  console.log(result);
} // ? ("+")
function subtraction6(num1, num2) {
  let result = num1 - num2;
  console.log(result);
} // ? ("-")
function multiplication6(num1, num2) {
  let result = num1 * num2;
  console.log(result);
} // ? ("*")
function divide6(num1, num2) {
  if (num2 !== 0) {
    let result = num1 / num2;
    console.log(result);
  } else {
    console.log("Sonni `0` ga bo'lish mumlun emas");
  }
} // ? ("/")
export { add6, subtraction6, multiplication6, divide6 };
// ? ========================= 6-MASHQ ========================= create

// ? ========================= 7-MASHQ ========================= create
function bigText(text) {
  console.log(text.toUpperCase());
}
function smallText(text) {
  console.log(text.toLowerCase());
}
export { bigText, smallText };
// ? ========================= 7-MASHQ ========================= create

// * ========================= Homework ========================= export
