// 1. Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin

// let number = prompt("raqamni kiriting: ");

const arrowPlus = (number = " ") => {
  let result = number.split("").reduce((a, b) => a + Number(b), 0);
  console.log(result);
};

// arrowPlus(number);

// 2. Ixtiyoriy arrow function yarating va uning parametriga bi nechta sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang: masalan: [1, 22, 3] yigindisi: 26 result=> [2,6]

const arrowPlus2 = (...num) => {
  let res = +num.reduce((a, b) => a + b, 0);
  console.log(res);
  let result = res.toString().split("");
  console.log(result);
};
// arrowPlus2(1, 22, 3);

// 3.Promt yordamida ixtiyoriy son kiritilsin va o'sha sonning lvadradi palindrome yoki palindrome emasligi topilsin algorithm function ichida bo'lsin

// let number = +prompt("raqamni kiriting: ");

const palindrome = (number = 0) => {
  console.log(number);
  let result = Math.pow(number, 2);
  console.log(result);
  let res = Array.from(result.toString(), Number);
  console.log(res);
  let reverse = Array.from(res, Number).reverse();
  console.log(reverse);
  for (let i = 0; i < reverse.length; i++) {
    if (reverse[i] !== res[i]) {
      console.log("palindrome emas");
      break;
    } else {
      console.log("palindome");
      break;
    }
  }
};

// palindrome(number);

// 4.Ixtiyoriy 2 ta funciton yaratilsin 1-function ichida random sonning raqamlari yig'indisi topilsin va mana shu 1-function 2-funciton ni ichida ishlasin masala callback function yordamida bajarilsin

const random = () => {
  let result = Math.floor(Math.random() * 100);
  return result;
};

const random2 = (num) => {
  let number = 10;
  console.log(num);
  let res = number + num;

  return res;
};
// console.log(random2(random()));

// 5.Promt va funciton yarating promt ichida yozilgan so'zning palindome yoki palindrome emasligi topilsin

// let number = prompt("So'zni kiriting: ");

const palindromeStringgh = (...str) => {
  let res = str.join("");
  console.log(res);
  let reverse = res.split("").reverse().join("");
  console.log(reverse);
  if (res === reverse) {
    console.log("palindrome");
  } else {
    console.log("palindrome emas");
  }
};
// palindromeStringgh(number);

// 6. Ixtiyoriy object yarating => {a:1,b:22} value larinig yig'indisini toping => 23 value larining yigindising yig'indisini toping => 2 + 3 = 5

let obj = {
  a: 1,
  b: 22,
  c: 3,
  d: 4,
  e: 5,
};
let value = Object.values(obj);

let value2 = Object.values(obj).reduce((a, b) => a + b, 0);

// console.log(value2);
