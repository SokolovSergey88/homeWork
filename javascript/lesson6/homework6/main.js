// 1 - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);


// 2 - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase1 = 'hello world';
console.log(toUpperCase1.toUpperCase());

let toUpperCase2 = 'lorem ipsum';
console.log(toUpperCase2.toUpperCase());

let toUpperCase3 = 'javascript is cool';
console.log(toUpperCase3.toUpperCase());



// 3 - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLowerCase1 = 'HELLO WORLD';
console.log(toLowerCase1.toLowerCase());

let toLowerCase2 = 'LOREM IPSUM';
console.log(toLowerCase2.toLowerCase());

let toLowerCase3 = 'JAVASCRIPT IS COOL';
console.log(toLowerCase3.toLowerCase());



// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   ';
console.log(dirtyString.trim());



// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str4 = 'Каждый охотник желает знать';
let stringToArray =  (str) => {
    return str.split(' ');
};
let arr = stringToArray(str4);
console.log(arr);
document.write(arr);



// 6 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let str5 = 'Каждый охотник желает знать';
let delete_characters = (str, index) => {
    return str.substring(0, index);
};
document.write(delete_characters(str5, 7));



// 7 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str6 = "HTML JavaScript PHP";
let insert_dash = (str) => {
    return str.split(' ').join('-').toUpperCase();
};

document.write(`<div>${insert_dash(str6)}</div>`);



// 8 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let str7 = 'hello world';
let firstCharToUppercase = (str) => {
    return str[0].toUpperCase() + str.substring(1);
}
console.log(firstCharToUppercase(str7));



// 9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
   return str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
};

console.log(capitalize('hello world'));

















































































