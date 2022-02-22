// 1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
   this['id'] = id;
   this['name'] = name;
   this['surname'] = surname;
   this['email'] = email;
   this['phone'] = phone;
}

let arr = [
    new User(10, 'Sergey', 'Sokolov', '222@gmail.com', 2666666665),
    new User(4, 'Oleg', 'Petrov', 'fff@gmail.com', 434322222),
    new User(7, 'Ivan', 'Kamushkin', 'qqq@gmail.com', 53256854),
    new User(2, 'Kokos', 'Arbuzov', 'fgd@gmail.com', 1122345666),
    new User(8, 'Yan', 'Skokov', 'fdff@gmail.com', 399988755),
    new User(6, 'Olga', 'Petrova', 'lll@gmail.com', 775455444),
    new User(3, 'Anna', 'Kozlovskaya', 'kkk@gmail.com', 900654444),
    new User(5, 'Alla', 'Pugacheva', 'mmm@gmail.com', 4334444456),
    new User(9, 'Verka', 'Serduchka', 'pop@gmail.com', 23232323232),
    new User(1, 'Prosto', 'Tak', 'iii@gmail.com', 6556566565),
];

console.log(arr);



// 2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(arr.filter(value => value.id % 2 === 0));



// 3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(arr.sort((a, b) => a.id - b.id));



// 4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arr2 = [
    new Client(3, 'Maksim', 'Galkin', 'ff@gmail.com', 34444555, ['html', 'css']),
    new Client(53, 'Valera', 'Leontiev', 'dsd@gmail.com', 2323234, ['javascript',12, 'php']),
    new Client(23, 'Oleg', 'Vinnik', 'wer@gmail.com', 54543333, ['pesni', 'poet', 3, 'opapa']),
    new Client(513, 'Olezha', 'Gazmanov', 'kfkk@gmail.com', 111112122, ['Salto', 'krutit', true, 3, 1]),
    new Client(353, 'Pavlo', 'Zibrov', 'rtrt@gmail.com', 2323234, ['Malenkiy', 'plot']),
    new Client(153, 'Valera', 'Leontiev', 'dsd@gmail.com', 2323234, ['php']),
    new Client(553, 'Valera', 'Leontiev', 'dsd@gmail.com', 2323234, ['javascript', 'php', 2, 3, 4, 5]),
    new Client(523, 'Valera', 'Leontiev', 'dsd@gmail.com', 2323234, ['javascript', 'php', 'str1']),
    new Client(12, 'Valera', 'Leontiev', 'dsd@gmail.com', 2323234, ['javascript', 'php', 'str2', 'str3']),
    new Client(5333, 'Valera', 'Leontiev', 'dsd@gmail.com', 2323234, ['javascript', 'php']),

];

console.log(arr2);



// 5 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arr2.sort((a, b) => a.order.length - b.order.length));





























