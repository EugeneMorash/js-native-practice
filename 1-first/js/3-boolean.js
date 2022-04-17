// * ===== boolean - условия ===== * //

// let op1 = 8;
// let op2 = 7;
// let hasCompare = op2 == 7;
// console.log(hasCompare);


// > >=
// < <=
// == - равно (не присвоить)
// === - равно с проверкой типа переменной
// - != - не равно
// - !== - не равно с проверкой


// || - or
// && - and
// ! - not

// false || false = false
// false || true = true
// let isExtension = 7 < 0 || 9 > 10 || 0 > -1; // true
// let isExtension = (7 < 0 && 9 > 10) || 0 > -1; //true
// let isExtension = (7 < 0 && 9 > 10) || !(0 > -1 && 0 > -10); // false || !true

// console.log(isExtension);


// console.log("Приведение типов");

// // null - тип, но typeof показывает object
// console.log(Boolean(null)); // false
// console.log(null == null); // ! true

// // undefined - тип
// console.log(Boolean(undefined)); // false
// console.log(undefined == undefined); // ! true

// console.log(null == undefined); // !!! true - 

// console.log(Boolean(NaN)); // false
// console.log(NaN == NaN); // ! false, пользуемся функцией isNaN(<переменная>)

// console.log(isNaN(NaN)); // true

// console.log(Boolean(0)); // false
// console.log(Boolean(-1)); // true
// console.log(Boolean(10)); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean("text")); // true
// console.log(Boolean("")); // false


// ? Условия (оператор)
let number = 15;
// if (number >= 20) {
//   console.log("It's work");
// }


// if (number >= 20) {
//   console.log("It's work");
// } else {
//   console.log("=(");
// }


// (-oo; -20] U [20; +oo)
// if (number >= 20) { // number [20; +oo)
//   console.log("It's work");
// } else if (number <= -20) { // number (-oo; -20]
//   console.log("!");
// } else { // number (-20; 20)
//   console.log("=(");
// }


// (-oo; -20] U [20; +oo)
if (number >= 20 || number <= -20) { // number [-oo; -20] U [20; +oo)
  console.log("It's work");
  console.log("two command");
} else { // number (-20; 20)
  let temp = 10;
  console.log(temp);
}

// console.log(temp); // let / const - не виден за пределами блока

// Промежутки:
// Проверить число на промежуток от -10 вкл до 17 не вкл [-10; 17)
// let num = 17.9;

// if (num >= -10 && num < 17) {
//   console.log(num);
// } else {
//   console.log("false!");
// }


// 2ой вариант условий (проверка на число или символ)
// let sign = "+";

// switch (sign) {
//   case "+":
//     console.log("+");
//     break;

//   case "-":
//     console.log("-");
//     break;

//   default: // Аналог else
//     console.log("error");
//     break;
// }

//? 3ий вариант - тернарный оператор
// let ageUser = 18;
// ageUser >= 18 ? console.log("true") : console.log("false");


// ? Проверка на чётность:
let exp = 62;
if (exp % 2 == 0) {
  console.log('even');
} else {
  console.log("odd");
}

// Проверка на undefined и null
let und = null;



if (!und && typeof und == "undefined") {
  console.log("undefined!");
} else if (und === null && typeof und == "object") {
  console.log("null!");
} else {
  console.log("Не ");
}





console.log("_________________________________________________");


//! Homework

//* Задача 0 (тернарный оператор)
// Запросить у пользователя число
// Если оно равно 108, то вывести в консоль: "ом";

// let userNum = Number(prompt("Дай число!"))
// userNum == 108 ? console.log("ом") : null;

//* Задача 1
// Запросить у пользователя 2 числа
// Найти наименьшее число
// Если числа одинаковые, то вывести любое из них

// let userNum1 = Number(prompt("Дай число!"));
// let userNum2 = Number(prompt("Мало! Давай ещё!"));

// if (userNum1 == userNum2) {
//   console.log(Math.floor(Math.random() * 10000000) + 1);
// }

//* Задача 2
// Запросить у пользователя 3 числа
// Найти наибольшее число
// Если числа одинаковые, то вывести любое число

// let userNum1 = Number(prompt("Дай число!"));
// let userNum2 = Number(prompt("Мало! Давай ещё!"));
// let userNum3 = Number(prompt("Ещё давай!"));
// // console.log(userNum1);

// if (!(0 === userNum1)) {

//   if (userNum1 > userNum2 && userNum1 > userNum3) {
//     console.log(userNum1);
//   } else if (userNum2 > userNum1 && userNum2 > userNum3) {
//     console.log(userNum2);
//   } else if (userNum3 > userNum1 && userNum3 > userNum2) {
//     console.log(userNum3);
//   } else {
//     console.log(userNum2);
//   }
// } else {
//   console.log("error");
// }



//* Задача 3
// Запросить у пользователя число если оно чётное или делится на 7, вывести в терминал: "okey"
// Иначе: error

// let userNum = Number(prompt("Время пришло, давай число!"));
// if (userNum % 2 == 0 || userNum % 7 == 0) {
//   console.log("okey");
// } else {
//   console.log("error");
// }



//* Задача 4 (Решить двумя способами. Использовать Switch, помимо if-else)
// Пользователь вводит 1 символ:
// Если это "a", то вывести в консоль "alpha"
// Если это "b", то вывести в консоль "beta"
// Если это "c", то вывести в консоль "gamma"
// Если это "1", то вывести в консоль "4"
// Если это "2", то вывести в консоль "8"
// Если это "3", то вывести в консоль "15"
// Во всех остальных случаях выводим: "error"

//* let userSymbol = prompt("Давай уже, вводи свой символ:");
// if (userSymbol == "a") {
//   console.log("alpha");
// } else if (userSymbol == "b") {
//   console.log("beta");
// } else if (userSymbol == "c") {
//   console.log("gamma");
// } else if (userSymbol == 1) {
//   console.log("4");
// } else if (userSymbol == 2) {
//   console.log("8");
// } else if (userSymbol == 3) {
//   console.log("15");
// } else {
//   console.log("error");
// }

// let userSymbol = prompt("Срочно нужен символ!");
// switch (userSymbol) {
//   case "a": // ===
//     console.log("alpha");
//     break;
//   case "b":
//     console.log("beta");
//     break;
//   case "c":
//     console.log("gamma");
//     break;
//   case "1":
//     console.log("4");
//     break;
//   case "2":
//     console.log("8");
//     break;
//   case "3":
//     console.log("15");
//     break;
//   default:
//     console.log("error");
//     break;
// }



//* Задача 5
// Пользователя просят ввести число
// Если это число от 0 вкл до 10 не вкл, то выводим: "ух-ты"
// Если же это число от 10 вкл до 20 вкл, то выводим удвоенное число
// Если же это число от 21 вкл до 50 не вкл, то выводим утроенное число
// В противном случае ничего не делаем

// let userNum = Number(prompt("Число, срочно!"));
// if (userNum >= 0 && userNum < 10) {
//   console.log("ух-ты");
// } else if (userNum >= 10 && userNum <= 20) {
//   console.log(userNum * 2);
// } else if (userNum >= 21 && userNum < 50) {
//   console.log(userNum * 3);
// }




//* Задача 6
// Учесть, что пользователь может ввести: (дополнить проверками задачи выше) 
// 1) пустое значение и нажать ок
// 2) нажать отмену
// 3) написать не число, а какой-то текст




