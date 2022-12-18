/* 1. Declare firstName, lastName, country, city, age, isMarried, year variable
and assign value to it and use the typeof operator
to check different data types.*/

const firstName = 'John'
// const lastName = 'Anthony'
// const country = 'Greece'
// const city = 'Athens'
// const age = 32
// const isMarried = true
// const year = 2022

// console.log(typeof(firstName))
// console.log(typeof(lastName))
// console.log(typeof(country))
// console.log(typeof(city))
// console.log(typeof(age))
// console.log(typeof(isMarried))
// console.log(typeof(year))


/*Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.*/
const now = new Date()
console.log(now.getFullYear())

console.log(now.getMonth()+ 1)
console.log(now.getTime())
