// Всі функції повинні бути описані стрілочним типом!!!!

// 1 - створити функцію яка обчислює та повертає площу прямокутника
let areaOfRectangle = (a, b) => a * b;
console.log('Площа прямокутника ' + areaOfRectangle(10, 10) );


// 2 - створити функцію яка обчислює та повертає площу кола
let areaCircle = (r) => ( (r**2) * 3.14);
console.log('Площа Кола ' + areaCircle(10));


// 3 - створити функцію яка обчислює та повертає площу циліндру
let areaCylinder = (r, h) => 2 * 3.14 * h * r;
console.log('Площа циліндру ' + areaCylinder(10, 10));


// 4 - створити функцію яка приймає масив та виводить кожен його елемент
let arr = ['one', 1, 'two', 2, true];

let showElement = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

showElement(arr);



// 5 - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let createParagraf = (txt) => {
    document.write(`<p>${txt}</p>`);
}

createParagraf('Okten');



// 6 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList = (text) => {
    document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

createList('some text');



// 7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createListLoop = (txt, count) => {
    document.write(`<ul>`);
        for (let i = 0; i < count; i++) {
            document.write(`<li>${txt}</li>`);
        }
    document.write(`</ul>`);
}

createListLoop('Hello', 3);



// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createListOfArr = (arr) => {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}

createListOfArr(arr);



// 8 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr1 = [ {id: 1, name: 'Natalya', age: 30}, {id: 2, name: 'Sergey', age: 33}, {id: 3, name: 'Ivan', age: 15} ];

let createDiv = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}. ${arrElement.name} - ${arrElement.age}</div>`);
    }
}

createDiv(arr1);



























































