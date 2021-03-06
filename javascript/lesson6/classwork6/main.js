// 1 - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let name = (str, char) => {
    let arr = [];
    if (str.includes(char)) {
        let a = str.split(char);
        a.forEach((item) =>{
            if (item) {
                arr.push(item);
            }
        })
        console.log(arr.join(' '));
    }
}
name(n1, '..');



// 2 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let random = (length, num) => {
    let newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(Math.floor(Math.random() * num));
    }
    return newArr;
}

console.log(random(100, 100));



// 3 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let arr = random(10, 10).sort((a, b) => a - b);
console.log(arr);



// 4 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let arr1 = random(10, 15).filter(number => {
    return number % 2 === 0;
})
console.log(arr1);



// 5 - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr2 =  random(15, 15).map(value => {
    return value + '';
})
console.log(arr2);



// 6 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (arr, direction) => {
    if(direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    }
    if(direction === 'descending') {
        return arr.sort((a, b) => b - a);
    }
};
console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));



// 7 - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration

let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(newSort);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let newFilter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(newFilter);

































































































