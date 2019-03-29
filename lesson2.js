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
    console.log('��� ������!');
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
  console.log('��� ������!');
}
console.log(getResult(2, 4, -3));

//Task#2
"use strict";
function askDrink() {
  let name = prompt('������� ���� ���');
  let dateOfBirthday = new Date(prompt('������� ���� ������ ��������'));
  let curDate = new Date();
  let curYear = curDate.getFullYear();
  let birthYear = dateOfBirthday.getFullYear();
  let age = curYear - birthYear;
  console.log(name, dateOfBirthday, age);
  if(age >= 18) {
    result = confirm(`�� ������� �� ���-����, ${name}?`);
   } else {
    alert(`�������, ${name}, �� � �� ���� ��� ������� ��������. ���� ���� ���������� ��� ������������� ���������� ������!�`)
   }
}
askDrink();

//Task#3
"use strict";
function getAverageMark(marks) {
  let resultSum = 0;
  for (let i = 0; i < marks.length; i++) {
    resultSum += parseInt(marks[i], 10);
  }
  return (marks.length)?resultSum / marks.length:0;
}
// unit test:
console.log(getAverageMark([1,2,3,4,5]));

//Main code
let dataLimit, marksStr, marks, resultNbr, result;
dataLimit = 5;
marksStr = prompt('������� ���������� ������');
marks = marksStr.split(' ');
resultNbr = marks.length;
if (resultNbr > dataLimit) { 
  alert(`��������! �� ����� ${resultNbr} ������. ���������� ���������� ������ = ${dataLimit}.\n� ������ ����� ����� ������ ${dataLimit} ������.`);
  for (let i = resultNbr; i > dataLimit; --i ) {
    marks.pop();
  }
}
result = getAverageMark(marks);
console.log(`������� ������: ${marks}`);
console.log(`������� ������: ${result}`);