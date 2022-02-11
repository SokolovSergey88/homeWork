// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function getSquare(a, b) {
    return a * b;
}

console.log(getSquare(5, 10));


// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
function getAreaOfCircle (r) {
    return (r ** 2) * 3.14;
}

console.log(getAreaOfCircle(10));


// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function getAreaOfСylinder(r, h) {
    return 2 * 3.14 * r * h;
}

console.log(getAreaOfСylinder(10, 10));


// 4 - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1,2,3,4,5,'hello world', 'okten'];
function showElementOfArray(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

showElementOfArray(array);


// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraf(txt) {
    document.write(`<p>${txt}</p>`);
}

createParagraf('Hello world');


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(txt) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++){
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`);
}

createList('some text');


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList1(txt, counter) {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++){
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`);
}

createList1('okten', 5);


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function makeListFromArray (arr) {
    document.write(`<ul>`);
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}

makeListFromArray(array);


// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arr1 = [ {id: 1, name: 'Natalya', age: 30}, {id: 2, name: 'Sergey', age: 33}, {id: 3, name: 'Ivan', age: 15} ];

function objArr(arr) {
    for (let arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
    }
}

objArr(arr1);






















































