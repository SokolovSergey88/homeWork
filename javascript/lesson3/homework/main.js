// 1 --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['1', '2', '3', '4', '5'];
let arr3 = ['1', true, false, 100, 'javascript'];
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 2 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = [];
arr4[0] = 'one';
arr4[1] = 2;
arr4[2] = 'three';
console.log(arr4);

// 3 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//   - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//   - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//   - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 10; i++) {
    document.write('<div>Some text</div>');
}

for (let i = 0; i < 10; i++) {
    document.write(`<div>Some text ${i}</div>`);
}

let i = 0;
while (i < 20) {
    document.write('<h1>Lorem txt</h1>');
    i++;
}

let j = 0;
while (j < 20) {
    document.write(`<h1>Lorem txt ${j}</h1>`);
    j++;
}


// 4 - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let num1 = [21, 32, 44, 11, 423, 1, 44, 144, 2121, 10];
for (let k = 0; k < num1.length; k++) {
    console.log(num1[k]);
}

//   - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str1 = ['owu', 'okten', 'html', 'css', 'scss', 'javascript', 'react', 'angular', 'bootstrap', 'vue.js'];
for (let string of str1) {
    console.log(string);
}

//   - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let str2 = [2022, 'okten', 'html', 'css', true, 'javascript', 'react', 'angular', 100500 , false];
for (let str2Element of str2) {
    console.log(str2Element);
}

//   - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let all1 = [2022, 'okten', 'html', 'css', true, 'javascript', 'react', 'angular', 100500 , false];
for (let all1Element of all1) {
    if (typeof all1Element === 'boolean') {
        console.log(all1Element);
    }
}

//   - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let all2 = [2022, 'okten', 'html', 'css', true, 'javascript', 'react', 'angular', 100500 , false];
for (let all2Element of all2) {
    if (typeof all2Element === 'number') {
        console.log(all2Element);
    }
}

//   - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let all3 = [2022, 'okten', 'html', 'css', true, 'javascript', 'react', 'angular', 100500 , false];
for (let all3Element of all3) {
    if (typeof all3Element === 'string') {
        console.log(all3Element);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr5 = [];
arr5[0] = 'Hello';
arr5[1] = 'World';
arr5[2] = 17;
arr5[3] = true;
arr5[4] = {};
arr5[5] = [];
arr5[6] = 33;
arr5[7] = false;
arr5[8] = 'Ok';
arr5[9] = 'No';
for (let arr5Element of arr5) {
    console.log(arr5Element);
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++){
    console.log(`Step number: ${i}`);
    document.write(`<div>Step number: ${i}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i < 100; i++){
    console.log(`Step number: ${i}`);
    document.write(`<div>Step number: ${i}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i < 100; i += 2){
    console.log(`Step number: ${i}`);
    document.write(`<div>Step number: ${i}</div>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`Even : ${i}`);
        document.write(`<div>Even : ${i}</div>`);
    }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(`Odd : ${i}`);
        document.write(`<div>Odd : ${i}</div>`);
    }
}













































