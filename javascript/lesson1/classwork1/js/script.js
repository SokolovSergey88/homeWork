// 1 - Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

const book = {
    name : 'javascript',
    page : 1000,
    genre : 'programming'
};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

const book2 = {
    name : 'javascript',
    page : 1000,
    genre : 'programming',
    authors : 'authors'
};

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let arr2 = [
    {book : 'Финансист', page : '1200', genre : 'роман', author: 'Теодор Драйзер'},
    {book : 'Основание', page : '1500', genre : 'научная фантастика', author: 'Айзек Азимов'}
];
console.log(arr2[0]);
console.log(arr2[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//    результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v = Math.PI * dC * dC *heightC;

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//    Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let gp = Math.sqrt(n**2 + m**2);


























