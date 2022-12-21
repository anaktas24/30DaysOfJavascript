// Declare a function fullName and it print out your full name.
function fullName1(){
  console.log("Mike Anthony")
}
fullName1()
console.log("+++++++++++")
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2(firstName, lastName){
  console.log(`Hi my name is ${firstName} ${lastName}`)
}
fullName2('John',"Anthony")
console.log("+++++++++++")
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(x,y){
  sum = x + y
  console.log(sum)
}
addNumbers(5,4)
console.log("+++++++++++")
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width) {
  area = length * width
  console.log(area)
}
areaOfRectangle(5,4)
console.log("+++++++++++")
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width) {
  perimeter = 2*(length+width)
  console.log(perimeter)
}
perimeterOfRectangle(10,10)
console.log("+++++++++++")
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height) {
  v = length * width * height
  console.log(v)
}
volumeOfRectPrism(2,3,4)
console.log("+++++++++++")
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
  p=3.14
  area = p * r * r
  console.log(area)
}
areaOfCircle(5)
console.log("+++++++++++")
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
  circ = 2*p*r
  console.log(circ)
}
circumOfCircle(5)
console.log("+++++++++++")
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass,volume) {
  d = mass/volume
  console.log(d)
}
density(10,5)
console.log("+++++++++++")
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(dist,time) {
  sp = dist / time
  console.log(sp)
}
speed(200,40)
console.log("+++++++++++")
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass,gravity) {
  w = mass * gravity
  console.log(w)
}
weight(80,40)
console.log("+++++++++++")
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC,oF) {
  oF = (oC * 9/5) + 32
  console.log(oF)
}
convertCelsiusToFahrenheit(0)
console.log("+++++++++++")
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bmi(weight,height) {
  bmi = weight / (height * height)
  if (bmi < 18.5) {
    console.log(bmi, 'Underweight')
  } else if (18.5 >= bmi || bmi <= 24.9 ) {
    console.log(bmi, 'Normal')
  } else if (25 >= bmi  || bmi <= 29.9) {
    console.log(bmi, 'Overweight')
  } else {
    console.log(bmi, 'Obese')
  }
}
bmi(89,1.77)
console.log("+++++++++++")
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  if (month === 'January' || month ==='February' || month ==='December'){
    console.log('Its Winter');
  }else if (month === 'June' || month === 'July' || month === 'August') {
    console.log('Its Summer')
  } else if (month === 'September' || month === 'October' || month === 'November') {
    console.log('Its Autumn');
  } else if (month === 'March' || month === 'April' || month === 'Mai'){
    console.log('Its Spring');
  }
}
checkSeason('Mai')
console.log("+++++++++++")
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(array){
  let val = array[0];

  for (let i = 1; i < array.length; i++) {
      if (array[i] > val) val = array[i];
  }

  return val;
}
console.log(findMax([42, 3, 101]));
console.log("+++++++++++")
