/* Write a script that prompt the user to enter base and
height of the triangle and calculate an area of
a triangle (area = 0.5 x b x h).*/
const prompt = require("prompt-sync")();
const b = prompt('Enter base: ');
const height = prompt('Enter height: ');
let area = 0.5 * b * height
console.log(`The area is : ${area}` )
