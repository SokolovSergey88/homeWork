// 1 - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//  -  Вивести кожну змінну за допомогою: console.log , alert, document.write

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let num1 = -999;
let num2 = 123;
let num3 = 3.14;
let num4 = 2.7;
let num5 = 16;
let bool1 = true;
let bool2 = false;



console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(bool1);
console.log(bool2);

alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(one);
alert(ten);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(bool1);
alert(bool2);

document.write(hello);
document.write(owu);
document.write(com);
document.write(ua);
document.write(one);
document.write(ten);
document.write(num1);
document.write(num2);
document.write(num3);
document.write(num4);
document.write(num5);
document.write(bool1);
document.write(bool2);

// 2 - Переприсвоїти кожній змінній з завдання значення на довільне.
//  - Вивести кожну змінну за допомогою: console.log , alert, document.write

hello = 1;
owu = 2;
com = 3;
ua = 4;
one = 5;
ten = 'aaa';
num1 = 'bbb';
num2 = 'ccc';
num3 = 'ddd';
num4 = 'eee';
num5 = 'fff';
bool1 = 'hi';
bool2 = 'by';



console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(bool1);
console.log(bool2);

alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(one);
alert(ten);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(bool1);
alert(bool2);

document.write(hello);
document.write(owu);
document.write(com);
document.write(ua);
document.write(one);
document.write(ten);
document.write(num1);
document.write(num2);
document.write(num3);
document.write(num4);
document.write(num5);
document.write(bool1);
document.write(bool2);

// 3 - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Sergey';
let middleName = 'Evgenievich';
let lastName = 'Sokolov';
let person = `${firstName} ${middleName} ${lastName}`;

// 4 - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// - Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt('Имя');
let name2 = prompt('Отчество');
let age = prompt('возраст');
console.log(`Вітаю ${name} ${name2}. Тобі ${age} років`);

// 5 - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 6 - - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 < 6 -> true
//   5 > 6 -> false
//   5 > 6 -> false
//   5 == 6 -> false
//   10 <= 10 -> true
//   10 >= 10 -> true
//   10 != 10 -> false
//   10 < 10 -> false
//   10 > 10 -> false
//   123 === '123' -> false
//   123 == '123' -> true

// 7 - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//       let str = "20";
//       let a = 5;
//       document.write(str + a + "<br/>");     '205' произошла конкатенация.
//       document.write(str - a + "<br/>");      15  приведение к числовому типу и арефметичесская операция.
//       document.write(str * "2" + "<br/>");    40  также
//       document.write(str / 2 + "<br/>");      10  также



































