// String, Number, Boolean, Loop, Array, Object

/* String */
let firstname = 'John';
const idcard = '1234';

/* Number */
let age = 25;
let height = 5.9;

/* Boolean */
let isMarrie = false;
console.log('My name is', firstname, 'and I am', age, 'years old');

/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ (mod)
*/
let number1 = '4';
let number2 = '8';

let result = number1 + number2;
console.log('new number is', result); //48

/*
== เท่ากับ
!= ไม่เท่ากับ
>  มากกว่า
<  น้อยกว่า
>= มากกว่าเท่ากับ
<= น้อยกว่าเท่ากับ
*/
let number3 = 5;
let number4 = 5;

let condition1 = number3 <= number4; //Boolean ค่าที่ได้รับจะเป็น true หรือ false
console.log('result of condition is', condition1);

// if - else condition
if (number3 != number4) {
          //ถ้าเป็นจริงทำตรงนี้
          console.log('this is if');
} else if (number3 == number4) {
          console.log('this is else if');
} else {
          console.log('this is else');
}

/*
>= 80 เกรด A
>= 70 เกรด B 
>= 60 เกรด C
>= 50 เกรด D
*/
let score = 75;
console.log('Your score is ' + score);

if (score >= 80) {
          console.log('you are grade A');
} else if (score >= 70) {
          console.log('you are grade B');
} else if (score >= 60) {
          console.log('you are grade C');
} else if (score >= 50) {
          console.log('you are grade D');
} else {
          console.log('you are grade F');
}

/*
&& และ
|| หรือ
! not หรือไม่
*/
let number5 = 5;
let number6 = 8;

/* true || false = false */
let condition = number5 >= 3 || number6 >= 10;
console.log('result of condition is', condition);

/* true && true = true */
let age1 = 20;
let gender = 'male';

if (age1 >= 20 && gender == 'male') {
          console.log('you are male adult');
}

let number7 = 25;

if (!(number7 % 2 == 0)) {
          console.log('you are even number');
}

/*
while loop
for
*/
let counter = 0;

console.log('while loop');

while (counter <= 10) { //เป็นจริงทำตรงนี้
          console.log('while loop', counter);
          counter = counter + 1;
}

for (let counter = 0; counter < 10; counter++) {
          console.log('for loop', counter);
}

/*
array
*/
let age2 = 20;
let age3 = 30;
let age4 = 40;
let age5 = 50;
console.log(age2, age3, age4, age5);

let ages = [90, 60, 40, 45, 50];
console.log('new age', ages[2]);
console.log('age list', ages);

/* แทนที่ค่าใน array */
ages = [45, 50];
console.log('age list', ages);

/* ต่อค่าใน array */
ages.push(55);
console.log('new age', ages);

if (!ages.includes(40)) {
          console.log('you have to be 40');       
}

console.log(ages);
ages.sort();
console.log(ages);

let names_list = ['John', 'Jane', 'Joe', 'Jenny'];
names_list.push('Jack');
console.log(names_list.length);
console.log(names_list[0]);
console.log(names_list[1]);
console.log(names_list[2]);

for (let index = 0; index < names_list.length; index++) {
          console.log('name list ', names_list[index]);
}

/*
object
*/

let student = [{
          name1: 'zz',
          age6:  90,
          grade: 'A'
},{
          name1: 'aa',
          age6:  66,
          grade: 'B'
}];

student.push = ({
          name1: 'qq',
          age6:  90,
          grade: 'C'
});

student.pop();

for (let index = 0; index < student.length; index++) {
          console.log('student number', (index + 1));
          console.log('name', student[index].name1);
          console.log('age', student[index].age6);
          console.log('grade', student[index].grade);
}

/*
object + array
*/

let scores = 50
let scores2 = 90
let grades = ''
//ประกาศ function ชื่อ calculateGrade รับ parameter ชื่อ scores
function calculateGrade(scores) {
          if (scores >= 80) {
                    grades = 'A';
          } else if (scores >= 70) {
                    grades = 'B';
          } else if (scores >= 60) {
                    grades = 'C';
          } else if (scores >= 50) {
                    grades = 'D';
          } else {
                    grades = 'F';
          }         
          return grades;
}
//arrow function
/*let calculateGrade = (scores) => {
          if (scores >= 80) {
                    grades = 'A';
          } else if (scores >= 70) {
                    grades = 'B';
          } else if (scores >= 60) {
                    grades = 'C';
          } else if (scores >= 50) {
                    grades = 'D';
          } else {
                    grades = 'F';
          }         
          return grades;
}*/

let student1 = calculateGrade(scores)
let student2 = calculateGrade(scores2)
console.log('grade of student :', student1, student2)

/*
array arrow
*/
let scores1 = [10, 20, 30, 40];
//let newScores = []

for (let index = 0; index < scores.length; index++) {
          console.log('Score', scores1[index]);
          /*
          if (scores1[index] >= 30) {
                    newScores.push(scores1[index]);
          }
          */
}

let newScores = scores1.filter((s) => {
          return s >= 20;
})

newScores.forEach((ns) => {
          console.log('New score : ', ns);
})

/*
map คือการแปลงค่าใน array ทั้งหมด

scores1 = scores1.map((s) => {
          return s * 2;
});

scores1.forEach((s) => {
          console.log('new score : ', s);
});
*/

/*
object arrow
*/

let student3 = [{
          name: 'John',
          score: 90,
          grade: 'A'
},
{
          name: 'Jane',
          score: 75,
          grade: 'B'
},
{
          name: 'Jim',
          score: 60,
          grade: 'C'
}]
let student_ = student3.find((s) => {
          if (s.name == 'Jane') {
                    return true;
          }
})

let doubleScore_student = student3.map((s) => {
          s.score = s.score * 2;
})
console.log('student : ', student_)

let highsScore_student = student3.filter((s) => {
          if (s.score >= 80) {
                    return true
          }
})
console.log('student : ', student3)
console.log('highscore_ student : ', highsScore_student)
