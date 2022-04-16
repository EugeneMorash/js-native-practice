// * ===== ввод из сайта в программу * ===== //

// 1. alert(); - всплвающее окно  с сообщением
// alert("text");

// 2. prompt() - pm - всплывающее окно с полем ввода текста
// prompt возвращает всегда string
// let result = prompt('сообщение для пользователя');
// console.log(typeof result);
// console.log(result);

// null - отдельный тип для пустых значений 
// undefined - не присвоили значение

// console.log(typeof null); // - typeof Обманывает на этом типе

// 3. confirm()
// let isResult = confirm('msg');
// console.log(isResult);


// Ввод чисел или строк

// Если хотим число?
// +Number()
// Boolean()
// String()

// let result = Number(prompt('сообщение для пользователя'));

// let resultPrompt = prompt('сообщение для пользователя');
// let result = Number(resultPrompt);


// "77" -> number -> 77
// "77px" -> number -> NaN
// "" -> number -> 0
// cancel -> null -> number -> 0

// console.log(typeof result);
// console.log(result);

// * ===== Математика ===== * //
let firstOperand = 10;
let secondOperand = 6;
// При склеивании числа сострокой получается строка
// Сложение +
console.log(firstOperand + " + " + secondOperand + " = " + (firstOperand + secondOperand));
// Вычитание -
console.log(`${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);

// Умножение *
console.log(`${firstOperand} x ${secondOperand} = ${firstOperand * secondOperand}`);

// Деление /
console.log(`${firstOperand} : ${secondOperand} = ${firstOperand / secondOperand}`);

// Остаток при делении %
console.log(`${firstOperand} : ${secondOperand} = остаток: ${firstOperand % secondOperand}`);

// let time = 54738957398563765843975; //min
// let hour = time / 60;
// let min = time % 60;
// console.log(parseInt(hour));
// console.log(min);

// Возведение в степень **
console.log(`${firstOperand} ^ ${secondOperand} = ${firstOperand ** secondOperand}`);

// Неявно преобразовал к типку number
console.log("9" / "3"); // ! нельзя - нужно обязательно явно привести к типку

// Инкремент ++ / декремент -- (работает только с переменными)
console.log("___________________________");
console.log("Инкремент ++ / декремент --");

let index = 1;
// index++;
// ++index;
console.log(index++); // console.log выполниться раньше, чем сработает пост-инкремент
console.log(index);

let temp = 0;
console.log(7 - temp++ * 2);

// Увеличить саму себя на единицу или двойку
let number = 0;
// number++;
// console.log(number);
number = number + 10; // number += 10;
number %= 7; // number = number % 7;
console.log(number);


// Number()
// parseInt()
console.log(parseInt(100.6)); // 100
console.log(parseInt("108px")); // 108
// parseFloat()
console.log(parseFloat("108.5px")); // 108.5
console.log(parseFloat("f108.5px")); // NaN
// Проверка на NaN
console.log(isNaN(parseFloat("f108.5px"))); // true

console.log("___________________________");
console.log("___________________________");
//! Homework
//* Задача 1. 
// 1. Запросить у пользователя число
// 2. Вывести в консоль удвоенное число (вывести в красивом виде сложение)

// let task = Number(prompt("Дай число!"));
// // let task = prompt("Дай число!"); 
// // task = Number(task);
// console.log(`${task} x 2 = ${task * 2}`);


//* Задача 2.
// 1. Запросить у пользователя имя
// 2. Запросить у пользователя его возраст
// 3. Вывести в консоль: "тебя зовут <имя>, после дня рождения тебе исполнится <возраст + 1>"

// let userName = prompt('Имя?')
// let userAge = prompt('Возраст?')
// console.log(`Тебя зовут ${userName}, после дня рождения тебе исполнится ${++userAge}`);


//* Задача 3.
// Не переписывая код в программу дать ответ, что выведется в консоль
// let tetraVar = 4;
// console.log(7 + tetraVar++ - 3 * --tetraVar);
// 7 + 4 - 3 * 4 = -1
// Проверить себя помощью js с


//* Задача 4.
// Не переписывая код в программу дать ответ, что выведется в консоль
// let tetraVar = 0;
// console.log(1 + ++tetraVar - 3 * --tetraVar + 2 * (++tetraVar + ++tetraVar));
// Проверить себя помощью js с


//* Задача 5.
// Не переписывая код в программу дать ответ, что выведется в консоль
// let tetraVar = 4;

// // console.log(3 - ++tetraVar - 3 + ++1 * 2 * (++tetraVar + --tetraVar));
// console.log(3 - ++tetraVar - 3 + 2 * 2 * (++tetraVar + --tetraVar));
// console.log(3 - ++tetraVar - 3 + `++1` * 2 * (++tetraVar + --tetraVar));


// Проверить себя помощью js с


//* Задача 6.
// Легенда:
// Необходимо заказать альбом с определённым количеством ЛИСТОВ
// На каждую СТРАНИЦУ альбома мы собираемся клеить 3 фотографии
// Написать программу, которая выведет в консоль сколько нужно ЛИСТОВ, чтобы расклеить 116 фотографий

// let numberOfPhotos = prompt('Количество фотографий?');
// // let numberOfPhotos = 116;
// let page = 3;
// let sheet = page * 2;
// console.log(`Для размещения ${numberOfPhotos} фотографий необходимо изготовить альбом, в котором будет ${parseInt(numberOfPhotos / sheet) + Math.ceil((numberOfPhotos % sheet) / 6)} листов`);


//* Задача 7.
// Легенда:
// Вы заходите в поликлинику и видите огромную очередь, вам нужно рассчитать время ожидания в очереди.

// Пользователь вводит кол-во людей в очереди.
// Фиксированное время приема одного человека всегда равно 10 минутам.

// Пример ввода: Введите кол-во людей: 14
// Пример вывода: "Вы должны отстоять в очереди 2 часа и 20 минут."

// let numAwait = prompt('Введите количество ожидающих людей:');
// let time = numAwait * 10;
// let hour = time / 60;
// let minute = time % 60;
// console.log(`Вы должны отстоять в очереди ${parseInt(hour)} часов и ${minute} минут`);

//* Задача 8.
// Пользователь вводит кол-во пикселей (например: 204.7px)
// В консоль выводится 184.7px (Всегда вычитается 20)

// let numPixels = parseFloat(prompt('Введите количество пикселей:'));
// console.log(`${numPixels - 20}px`);


//* Задача 9.
// Создать переменную fontSizeHtml = 10;
// Пользователь вводит любое значение в пикелях (px)
// В консоль выводится значение с размерностью rem.

// let fontSizeHtml = 14;
// let pixelSize = parseFloat(prompt('Введите значение в пикселях:'));
// console.log(`${pixelSize / fontSizeHtml}rem`);




















