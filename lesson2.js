// Task#1 v.1
"use strict";
function getResult(a, b, c) {
  let discr = b ** 2 - 4 * a * c;
  let result = [];
  if (discr > 0) {
    result.unshift((-b - Math.sqrt(discr)) / (2 * a));
    result.unshift((-b + Math.sqrt(discr)) / (2 * a));
  } else if (discr == 0) {
    result.unshift(-b / (2 * a));
  } else {
    console.log('Нет корней!');
  }
  return result;
}
console.log(getResult(2, 4, -3));

// Task#1 v.2
"use strict";
function getResult(a, b, c) {
  let discr = b ** 2 - 4 * a * c;
  let result = [];
  if (discr > 0) {
    result.unshift((-b - Math.sqrt(discr)) / (2 * a));
    result.unshift((-b + Math.sqrt(discr)) / (2 * a));
  } else if (discr == 0) {
    result.unshift(-b / (2 * a));
  }
  return result;
}
let res = getResult(2, 4, -3);
if (res.length > 0) {
  console.log(res);
} else {
  console.log('Нет корней!');
}
console.log(getResult(2, 4, -3));

//Task#2
"use strict";
function askDrink() {
  let name = prompt('Введите Ваше имя');
  let dateOfBirthday = new Date(prompt('Введите дату Вашего рождения'));
  let curDate = new Date();
  let curYear = curDate.getFullYear();
  let birthYear = dateOfBirthday.getFullYear();
  let age = curYear - birthYear;
  console.log(name, dateOfBirthday, age);
  if(age >= 18) {
    result = confirm(`Не желаете ли олд-фэшн, ${name}?`);
   } else {
    alert(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!”`)
   }
}
askDrink();

//Task#3
"use strict";
function getAverageMark(marks) {
  let dataLimit = 5;
  let resultSum = 0;
  let resultNbr = marks.length;
  if (resultNbr > dataLimit) { 
    alert(`Внимание! Вы ввели ${resultNbr} оценок. Предельное количество оценок = ${dataLimit}.\nВ расчет будут взяты первые ${dataLimit} оценок.`);
    marks.splice(dataLimit, resultNbr - dataLimit);
  }
  for (let i = 0; i < marks.length; i++) {
    resultSum += parseInt(marks[i], 10);
  }
  return (marks.length)?resultSum / marks.length:0;
}
// unit test:
console.log(getAverageMark([1,2,3,4,5]));
console.log(getAverageMark([1,2,3,4,5,5,5]));

//Main code
let marks, result;
marks = prompt('Введите полученные оценки').split(' ');
result = getAverageMark(marks);
console.log(`Введены оценки: ${marks}\nСредняя оценка: ${result}`);
