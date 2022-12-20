/* 1. Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/

const age = prompt('Enter your age: ')
const diff = 18


if (age >= 18){
  alert("You are old enough to drive.")
}else{
  alert(`You are left with ${diff - age} years to drive`)
}
/* 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the
result to console stating who is older (me or you).
Use prompt(“Enter your age:”)
to get the age as input.*/

const myAge = 32
const yourAge = prompt('Enter your age: ')

if (yourAge > myAge){
  console.log("You are older than me!")
}else{
  console.log("You are younger than me!")
}

/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'.
Try to implement it in to ways

using if else*/
let a = 4
let b = 3

if(a> b){
  return 'a is greater than b'
}else{
  return 'a is less than b'
}
//ternary operator.
a > b ? 'a is greater than b' : 'a is less than b'


/* 4.Even numbers are divisible by 2 and the remainder is zero.
How do you check, if a number is
even or not using JavaScript?*/

const number = prompt('Enter a number: ')
if (number % 2 == 0){
  return 'number is even'
}else{
  return 'number is odd'
}
