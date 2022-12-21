/*1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */


let score = prompt('Enter score');
switch (true) {
  case score >= 80:
    console.log('A');
    break;
  case score >= 70 && score <= 89:
    console.log('B');
    break;
  case score >=60 && score <= 69:
    console.log('C');
    break;
  case score >= 50 && score <= 59:
    console.log('D');
  case score < 49:
    console.log('F');
}




/*2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

// let month = prompt("Enter a month: ")


switch (month) {
  case 'January' && 'February' && 'December':
    console.log('Its Winter');
    break;
  case 'June' && 'July' && 'August':
    console.log('Its Summer');
    break;
  case 'September' && 'October' && 'November':
    console.log('Its Autumn');
    break;
  case 'March' && 'April' && 'Mai':
    console.log('Its Spring');
    break;
}


/*3. Check if a day is weekend day or a working day. Your script will take day as an input. */

let dayinput = prompt("Enter day: ")
let day = dayinput.toLowerCase()

if (day == 'saturnday' || day== 'sunday') {
  console.log("Its Weekend")
} else {
  console.log("Its Working day")
}
