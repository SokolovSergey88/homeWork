// Всі функції повинні бути описані стрілочним типом!!!!

// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (a, b, c) => {
    let m = a;
    if (a < b && a < c) {
       m = a;
    } else if (b < a && b < c) {
        m = b;
    } else if (c < a && c < b) {
        m = c;
    }
    return m;
}

console.log(min(10, 15, -2));



// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a, b, c) => {
    let m = a;
    if (a > b && a > c) {
        m = a;
    } else if (b > a && b > c) {
        m = b;
    } else if (c > a && c > b) {
        m = c;
    }
    return m;
}

console.log(max(10, 15, -2));



// 3 - створити функцію яка повертає найбільше число з масиву
let arr = [1, 44, 100, -90, 17, 45];

let maxElem = (arr) => {
    let max = arr[0];
    for (const arrElem of arr) {
        if (arrElem > max) {
            max = arrElem;
        }
    }
    return max;
}

console.log(maxElem(arr));



// 4 - створити функцію яка повертає найменьше число з масиву
let minElem = (arr) => {
    let min = arr[0];
    for (const minElement of arr) {
        if(minElement < min) {
            min = minElement;
        }
    }
    return min;
}

console.log(minElem(arr));




// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = (arr) => {
    let result = 0;
    for (const arrElement of arr) {
        result += arrElement;
    }
    return result;
}

console.log(sum(arr));




// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let average = (arr) => {
    let result = 0;
    for (const arrElement of arr) {
        result += arrElement;
    }
    return result / arr.length;
}

console.log(average(arr));



// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let maxMin = (...arg) => {
    let max = arg[0];
    let min = arg[0];
    for (let i = 0; i < arg.length; i++){
        if(arg[i] > max){
            max = arg[i];
        }
        if(arg[i] < min) {
            min = arg[i];
        }
    }
    console.log(max);
    return min;
}

console.log(maxMin(15, 100, 30, -5));



// 8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomNumbers = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

console.log(randomNumbers(10));



// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomNumbers2 = (length, limit) => {
    let arr = [];
    for (let i = 0; i <length; i++){
        arr.push(Math.round(Math.random()*limit));
    }
    return arr;
}

console.log(randomNumbers2(15, 1000));



// 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reversArr = (arr) => {
    let reversArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        reversArr.push(arr[i]);
    }
    return reversArr;
}

console.log(reversArr(arr5));



























































