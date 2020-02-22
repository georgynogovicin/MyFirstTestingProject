'use strict';


// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;
// console.log(leftBorderWidth);
var string = "Hello, World!";
console.log(4 / 0); //здесь выйдет бесконечность
console.log(string * 9); //тут выйдет NaN - значение не определено

let persone = { //здает объект, в нем можно указать его свойства и потом к ним обращаться
    name: "Georgy",
    age: 23,
    married: false
};
console.log(persone["name"]); //выводит в консоль сообщение
//alert("Hello, World!!");//выводит модальное окно на страницу, пока не нажать в окне ок код останавливаается

//confirm("Are you here?"); //выводит модальное окно с текстом и варианты "ок" или "отмена"
// let answer = confirm("Are you here?"); //присвоит переменно answer значение ответа
// console.log(answer);

let answer = prompt("Вам есть 18?", ""); //prompt выводит окно со строкой для ввода, дальше присвоит переменной ответ
console.log(answer);
console.log(typeof(answer));