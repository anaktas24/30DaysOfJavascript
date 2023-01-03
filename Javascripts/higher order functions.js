const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//Explain the difference between forEach, map, filter, and reduce.
//forEach is only for arrays, map modifies array ele and return new array, filter is filtering out items that fulfill condition and returns array
//reduce returns a single value from a callback function

// Define a callback function before you use it in forEach, map, filter or reduce.
const callback = (n) =>{
  return n**2
}
function cube(callback,n) {
  return callback(n)*n
}
  cube(callback,3)
//Use forEach to console.log each country in the countries array.
countries.forEach((country)=>{
  console.log(country)
})
  //Use forEach to console.log each name in the names array.
  names.forEach((name)=>{
    console.log(name)
  })
  //Use forEach to console.log each number in the numbers array. */
  numbers.forEach((number)=>{
    console.log(number)
  })

// Use map to create a new array by changing each country to uppercase in the countries array.
countries.map((country)=>{
  console.log(country.toUpperCase())
})
// Use map to create an array of countries length from countries array.
countries.map((country)=>{
  console.log(country.length)
})
// Use map to create a new array by changing each number to square in the numbers array
numbers.forEach((number)=>{
  console.log(number**2)
})
// Use filter to filter out countries containing land.
countries.filter((country)=>{
  console.log(country.includes('land'))
})
// Use filter to filter out countries having six character.
countries.filter((country)=>{
  console.log(country.length)
})
