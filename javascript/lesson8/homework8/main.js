// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');


// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');


// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Some text content';



// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Some text rules';



// -- змініть кожному елементу колір фону на червоний
content.style.background = 'red';
rules.style.background = 'red';


// -- змініть кожному елементу колір тексту на синій
content.style.color = 'blue';
rules.style.color = 'blue';


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.getElementsByClassName('fc'));
console.log(rules.getElementsByClassName('bp'));


// -- поміняти колір тексту у всіх елементів fc_rules на червоний


let fcRules = document.querySelectorAll('.fc_rules');
for (const fcRule of fcRules) {
    fcRule.style.color = 'red';
}