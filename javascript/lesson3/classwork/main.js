
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arrNumbers = [2,17,13,6,22,31,45,66,100,-18];


// 1. перебрати його циклом while
let i = 0;
while (i < arrNumbers.length) {
    console.log(arrNumbers[i]);
    i++;
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let x = arrNumbers.length - 1;
while (x >= 0) {
    console.log(arrNumbers[x]);
    x--;
}




// 2. перебрати його циклом for
for (let i = 0; i < arrNumbers.length; i++) {
    console.log(arrNumbers[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for (let i = arrNumbers.length - 1; i >= 0; i--){
    console.log(arrNumbers[i]);
}





// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j < arrNumbers.length) {
    if (j % 2 !== 0) {
        console.log(arrNumbers[j]);
    }
    j++;
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let y = arrNumbers.length - 1;
while (y >= 0) {
    if (y % 2 !== 0) {
        console.log(arrNumbers[y])
    }
    y--;
}





// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arrNumbers.length; i++) {
    if (i % 2 !== 0) {
        console.log(arrNumbers[i]);
    }
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for (let i = arrNumbers.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arrNumbers[i]);
    }
}





// 5. перебрати циклом while та вивести  числа тільки парні  значення
let k = 0;
while (k < arrNumbers.length) {
    if (arrNumbers[k] % 2 === 0) {
        console.log(arrNumbers[k]);
    }
    k++;
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let u = arrNumbers.length - 1;
while (u >= 0) {
    if (arrNumbers[u] % 2 === 0) {
        console.log(arrNumbers[u]);
    }
    u--;
}





// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] % 2 === 0) {
        console.log(arrNumbers[i]);
    }
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for (let i = arrNumbers.length - 1; i >= 0; i--) {
    if (arrNumbers[i] % 2 === 0) {
        console.log(arrNumbers[i]);
    }
}





// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] % 3 === 0) {
        arrNumbers[i] = 'okten';
    }
}
console.log(arrNumbers);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for (let i = arrNumbers.length - 1; i >= 0; i--){
    if (arrNumbers[i] % 3 === 0) {
        arrNumbers[i] = 'okten';
    }
}
console.log(arrNumbers);


// 8. вивести масив в зворотньому порядку.
for (let i = arrNumbers.length - 1; i >= 0; i--) {
    console.log(arrNumbers[i]);
}





































































