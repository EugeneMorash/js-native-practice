// * ===== cycles ====== * //

//* 1. for - цикл - повтор
// for (let index = 10; index >= 1; index--) {
//   // Неявно if (index < 10) {}
//   console.log("!");
//   console.log(index);
//   // Неявно index++
// }

// Вывести столбик из таблицы умножения на число 2
// let number = 9;

// for (let index = 2; index <= 10; index++) {
//   console.log(`${index} x ${number} = ${index * 2}`);
// }

// for (let index = 0; index < 10; index++) {
//   if (index % 2 == 0) {
//     continue; // Далее выполнится index++ и проверка условия
//   }
//   console.log(index);
//   if (index == 7) {
//     break;
//   }
// }


// let text = "";
//? Цикл в цикле
// out: // метка для break
// for (let i = 1; i < 6; i++) {
//   for (let j = 0; j < 5; j++) {
//     text += "" + i + j + " ";

//     if (i == 4) {
//       break out;
//     }
//   }
//   console.log(text);
//   text = "";
// }




//* Цикл с предусловием
//  while (true) {
//   number--;
//   console.log(number);
//   if (number == 0) {
//     break; // ломает(завершает) ближайший родительский цикл*
//   }
// }

//* Цикл с постусловием
// do {
//   console.log(number);
//   number--;
// } while (number > 9)


// Варианты бесконечных циклов
// while(true) {}
// for(;;) {}


console.log("______________________________________________________");


//! Homework

//* Задача 1:
// 1. Вывести 5 раз одну и ту же фразу в консоль, пользуясь циклами
// Сделать эту задачу 3 способами:
// а) цикл for
// б) цикл while
// в) цикл do while

// for (let index = 1; index <= 5; index++) {
//   console.log("Мы рождены, чтоб сказку сделать пылью!");
// }

// let cycleVar = 0;
// while (true) {
//   cycleVar++;
//   // console.log(cycleVar);
//   console.log("Мы рождены, чтоб сказку сделать пылью!");
//   if (cycleVar == 5) {
//     break;
//   }
// }

// let cycleVar = 1; //? где 1, где 0
// do {
//   cycleVar++;
//   // console.log(cycleVar);
//   console.log("Мы рождены, чтоб сказку сделать пылью!");
//   // cycleVar++;
// } while (cycleVar <= 5); // почему не работает с == ?


//* Задача 2: 
// Вывести только нечётные числа в диапазоне от 1 вкл до 35 вкл

// for (let index = 1; index <= 35; index++) {
//   if (index % 2 != 0) {
//     console.log(index);
//   }
// }




//* Задача 3: 
// Вывести столбик из таблицы умножения на то число, на которое введёт пользователь
// Диапазон столбика от 2 до 10 вкл
// let userNum = Number(prompt("Дай число!"));
// for (index = 2; index <= 10; index++) {
//   console.log(`${userNum} x ${index} = ${userNum * index}`);
// }



//* Задача 4:
// Запросить у пользователя 2 числа - число a и число b
// Вывести в консоль среднее арифметическое всех чисел из этого отрезка от a до b включительно, которые кратны 3.

// Пример:
// Ввели 2 числа: -5 и 12
// В этом отрезке 6 чисел, которые делятся на 3:
// -3 0 3 6 9 12. Их среднее арифметическое равно 4.5

// Примечание: 
// учесть случай, когда промежуток задан неверно
// Учесть случай, когда чисел, делящихся на 3 - нет

// while (true) {
//   let userNum1 = Number(prompt("Введите начало числового отрезка:")); // "64"
//   let userNum2 = Number(prompt("Введите конец числового отрезка:"));

//   if (isNaN(userNum1) || isNaN(userNum2)) {
//     console.log("Пожалуйста, вводите только цифры");
//     break;
//   }
//   if ((!userNum1 || !userNum1) && userNum1 != 0 && userNum2 != 0) {
//     console.log("null || undefined");
//     break;
//   }

//   if ((userNum2 - userNum1) < 0) {
//     console.log("Неверно задан отрезок. Введите сначала меньшее число");
//     break;
//   }
//   if (userNum2 / userNum1 == 1) {
//     console.log("Числа не должны быть равны");
//     break;
//   }
//   if (userNum2 - userNum1 < 3) {
//     console.log("Отрезок слишком мал");
//     break;
//   }
//   // userNum1 = Number(userNum1);
//   // userNum2 = Number(userNum2);

//   // let n = 1;
//   let summary = 0;
//   let counter = 1;
//   for (let index = userNum1; index <= userNum2; index++) {
//     // if (index % 3 != 0) {
//     //   continue;
//     // } else {
//     //   // console.log(index);
//     //   counter++;
//     //   // console.log(counter);
//     //   summary += index;
//     //   // console.log(summary);
//     // }
//     if (index % 3 == 0) {
//       counter++;
//       summary += index;
//     }
//   }
//   let average = summary / counter;

//   console.log(average);
//   break;
// }



// null -> type null (object) -> false
// "" -> string -> false

// let number = prompt('Write number:');

// if (number === null) { // Отмена
//   console.log("null!");
// } else if (number === "") { // Ок
//   console.log("empty string");
// } else {
//   number = Number(number);
//   console.log(number);
// }


// let number = console.log();
// if (number === null) {
//   console.log("null!");
// } else if (number === "") {
//   console.log("empty string");
// } else if (number === undefined) {
//   console.log("undefined");
// } else {
//   number = Number(number);
//   console.log(number);
// }

// Выводить в консоль лог всё кроме пустой строки







//? Задача 5*: 
// Вывести простые числа
// 		Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// 		Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// 		Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// 		Напишите код, который выводит все простые числа из интервала от 2 до n.
// 		Для n = 10 результат должен быть 2,3,5,7.


// let n = Number(prompt("Введите целое положительное число:"));
// for (let index = 3; index <= n; index++) {
//   // console.log(index);
//   for (let i = 2; i < index; i++) {
//     // console.log(index, i);
//     if (index % i == 0) {
//       // console.log(index + " - не простое");
//       break;
//     }
//     if (i + 1 === index) {
//       console.log(index + " Простое");
//     }
//   }
//   // console.log(index);
// }


//? Задача 6*
// Вывести таблицу умножения от 1 до 5 в таком же формате, как показано снизу
// (важно соблюдение кол-ва пробелов)

//    1  2  3  4  5

// 1  1  2  3  4  5

// 2  2  4  6  8  10

// 3  3  6  9  12 15

// 4  4  8  12 16 20

// 5  5  10 15 20 25


let num = 5;
// console.log("   1  2  3  4  5");

let str = "";
for (let i = 1; i <= num; i++) {
  for (j = 1; j <= num; j++) {
    if (j * i < 10) {
      str += '\t' + j * i;
    } else {
      str += '\t' + j * i + "";
    }
  }
  console.log(`${i} ${str}`);
  str = "";
}







// let text = "";
// // Цикл в цикле
// out: // метка для break
// for (let i = 1; i < 6; i++) {
//   for (let j = 0; j < 5; j++) {
//     text += "" + i + j + " ";

//     if (i == 4) {
//       break out;
//     }
//   }
//   console.log(text);
//   text = "";
// }













