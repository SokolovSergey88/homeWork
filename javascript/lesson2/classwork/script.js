// 1 - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// let num1 = +prompt('Введите первое число:');
// let num2 = +prompt('Введите второе число:');
//
// if (num1 > num2) {
//     console.log('Первое число больше');
// } else if (num1 === num2) {
//     console.log('Числа равны');
// } else {
//     console.log('второе число больше');
// }

// 2  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let apartmentNumber = +prompt('введите номер квартиры');
//
// if (apartmentNumber > 0 && apartmentNumber <= 21) {
//     console.log('эта квартира находится в первом подъезде');
// } else if (apartmentNumber > 21 && apartmentNumber <= 48) {
//     console.log('эта квартира находится во втором подъезде');
// } else if (apartmentNumber > 48 && apartmentNumber <= 90) {
//     console.log('эта квартира находится в третьем подъезде');
// } else {
//     console.log('такой квартиры в доме нет');
// }

// 3 - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО


// let number = +prompt('Введите число: ');
//
// if(number === 10) {
//     console.log('Вірно');
// } else {
//     console.log('не вірно');
// }

// 4 - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let x = 'string';

if (typeof x === 'number') {
    console.log(1);
} else if (typeof x === 'string') {
    console.log(2);
} else if (typeof x ==='boolean') {
    console.log(3);
} else if (typeof x === 'object') {
    console.log(4);
} else {
    console.log('нет значения');
}

// 5 - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = +prompt('Введите температуру на улице:');

if (temperature >= 10 && temperature <= 22) {
    console.log('Идем учится в OKTEN');
} else {
    console.log('Учимся онлайн');
}

// 6 - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне

let  lotto = +prompt('для игры в викторину введите число от 1 до 5');

switch (lotto) {
    case 1 : console.log('вы выиграли авто');
        break;
    case 2 : console.log('вы выиграли телефон');
        break;
    case 3 : console.log('вы выиграли планшет');
        break;
    case 4 : console.log('вы выиграли мото');
        break;
    case 5 : console.log('вы выиграли конфету');
        break;
    default : console.log('Вы проиграли');
}

































