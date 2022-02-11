// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function showMin(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c)
    } else {
        console.log('Error');
    }
}

showMin(-10, 55, 0);


// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function showMax(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c)
    } else {
        console.log('Error');
    }
}

showMax(100, -33333, 17);


// 3 - створити функцію яка повертає найбільше число з масиву
function maxElementOfArr(arr) {
    let maxElem = arr[0];
    for (let arrElement of arr) {
        if(arrElement > maxElem) {
            maxElem = arrElement;
        }
    }
    return maxElem;
}

let arr1 = [120, 100, 101];
console.log(maxElementOfArr(arr1));


// 4 - створити функцію яка повертає найменьше число з масиву
function minElementOfArr(arr) {
    let min = arr[0];
    for (let arrElement of arr) {
        if(arrElement < min) {
            min = arrElement;
        }
    }
    return min;
}

console.log(minElementOfArr(arr1));


// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumElemOfArr(arr) {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(sumElemOfArr(arr1));


// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr2 = [5, 10, 15];
function averageOfArr(arr) {
    let average = 0;
    for (let arrElement of arr) {
        average += arrElement;
    }
    return average / arr.length;
}

console.log(averageOfArr(arr2));


// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax(arg) {
    let min = arguments[0];
    let max = arguments[0];
    for (let elem of arguments) {
        if (elem > max) {
            max = elem;
        }
        if (elem < min) {
            min = elem;
        }
    }
    console.log('Max', max);
    return min;
}

console.log("min :", minMax(5, 7, 8, 9));


// 8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomNumbers(length) {
    let arr = [];
    for (let i = 0; i < length; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

console.log(randomNumbers(10));



// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomNumbers2(length, limit) {
    let arr = [];
    for (let i = 0; i <length; i++){
        arr.push(Math.round(Math.random()*limit));
    }
    return arr;
}

console.log(randomNumbers2(15, 1000));



// 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reversArr(arr) {
    let reversArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        reversArr.push(arr[i]);
    }
    return reversArr;
}

console.log(reversArr(arr5));





































































