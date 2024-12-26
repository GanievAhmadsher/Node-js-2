// * ========================= Homework ========================= export

// ? ========================= 1-MASHQ ========================= create
export function _Hello1() {
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

// ? ========================= 8-MASHQ ========================= create
const number8 = 6205;
const email8 = "exemple@gmail.com";
export { number8, email8 };
// ? ========================= 8-MASHQ ========================= create

// ? ========================= 9-MASHQ ========================= create
// ? ========================= 9-MASHQ ========================= create

// ? ========================= 10-MASHQ ========================= create
export function validator(username, age) {
  if (typeof username === "string" && username !== "" && age >= 18) {
    console.log("User tasdiqlandi!");
  } else {
    console.log("User malumotlari to'g'ri kelmadi");
  }
}
// ? ========================= 10-MASHQ ========================= create

// ? ========================= 11-MASHQ ========================= create
export function random11(arr) {
  if (Array.isArray(arr)) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return `${arr} is not array!`;
}
// ? ========================= 11-MASHQ ========================= create

// ? ========================= 12-MASHQ ========================= create
// ? ========================= 12-MASHQ ========================= create

// ? ========================= 13-MASHQ ========================= create
function juft(arr) {
  const result = arr.filter((value) => value % 2 === 0);
  console.log("juft:", result);
}
function toq(arr) {
  const result = arr.filter((value) => value % 2 !== 0);
  console.log("toq:", result);
}
function musbat(arr) {
  const result = arr.filter((value) => value > 0);
  console.log("musbat:", result);
}
function manfiy(arr) {
  const result = arr.filter((value) => value < 0);
  console.log("manfiy:", result);
}
export { juft, toq, musbat, manfiy };
// ? ========================= 13-MASHQ ========================= create

// ? ========================= 14-MASHQ ========================= create
function reverseArray(arr) {
  return arr.reverse();
}

function findMax(a, b) {
  if (a > b) {
    return `katta: ${a}`;
  } else if (a == b) {
    return `Sonlar teng:`;
  } else if (a < b) {
    return `katta: ${b}`;
  }
}

function countVowels(str) {
  let unli = ["a", "e", "i", "o", "u"];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let uI = str[i].toLowerCase();
    unli.forEach((item) => {
      if (item === uI) {
        sum++;
      }
    });
  }
  return `${sum}: unli`;
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
export { reverseArray, findMax, countVowels, factorial };
// ? ========================= 14-MASHQ ========================= create

// * ========================= Homework ========================= export
