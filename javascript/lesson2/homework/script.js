// 1  - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = Math.round(Math.random() * 60);

if (time < 15) {
    console.log('Перша четверть години');
} else if(time >= 15 && time < 30) {
    console.log('друга четверть години');
} else if (time >= 30 && time < 45) {
    console.log('третя четверть години');
} else if (time >= 45 && time < 60) {
    console.log('четверта четверть години');
} else {
    console.log('Error!!!');
}

// 2 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.round(Math.random() * (31 - 1)) + 1;

if (day <= 10) {
    console.log('перша декада місяця');
} else if (day > 10 && day <= 20) {
    console.log('друга декада місяця');
} else if (day > 20) {
    console.log('третя декада місяця');
} else {
    console.log('Error!!!');
}

// 3 - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = !!(Math.round(Math.random() * 1 - 1) + 1);

if (test === true) {
    console.log('Вірно');
}else {
    console.log('Неправильно')
}

test === true ? console.log('Вірно') : console.log('Неправильно');


// 4 Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = -3;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}

a !== 0 ? console.log('Вірно') : console.log('Не вірно');

// 5 - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let timetable = +prompt('Введіть номер дня тижня от 1 до 7');

    switch (timetable) {
        case 1 : console.log('Понеділок! працюемо, вчимося');
            break;
        case 2 : console.log('Вівторок! ще працюемо, робимо домашку!');
            break;
        case 3 : console.log('Середа! ще трішкі, вчимося!');
            break;
        case 4 : console.log('Четверг! ще робота, ще домашка!');
            break;
        case 5 : console.log('Пятниця! ще трішкі!');
            break;
        case 6 : console.log('Субота! Англійська!');
            break;
        case 7 : console.log('Неділя! Відпочинок!');
            break;
        default : console.log('Введіть корректні данні');
    }


// 6 - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let yer = +prompt('Введыть рік: ');
    if (yer % 4 === 0) {
        console.log('Це високосний рік');
    } else if (yer % 4 !== 0) {
        console.log('рік не високосний')
    } else {
        console.log('Введіть правильно');
    }


// 7 - - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let nameJS = prompt('Яка «офіційна» назва JavaScript?');
if (nameJS === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!');
}

































