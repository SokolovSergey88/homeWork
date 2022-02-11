// 1 - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function concat (arg) {
    if(arguments.length === 1) {
        console.log(arg);
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1]);
    } else {
        console.log('Error');
    }
}

concat('okten', '2022');


// 2 - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];

function sumArrayElement (array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i]);
    }
    return result;
}

console.log(sumArrayElement(arr1, arr2));



// 3 - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function returnKeys (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        for (let arrElementKey in arr[i]) {
            newArr.push(arrElementKey);
        }
    }
    return newArr;
}

console.log(returnKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));



// 4 - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function returnKeysProp (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        for (let arrElementKey in arr[i]) {
            newArr.push(arr[i][arrElementKey]);
        }
    }
    return newArr;
}

console.log(returnKeysProp([{name: 'Dima', age: 13}, {model: 'Camry'}]));
























































