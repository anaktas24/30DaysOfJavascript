// Iterate 0 to 10 using for loop, do the same using while and do while loop

for (i=0; i<=10; i++){
  console.log(i)
}
console.log("===========================")
let a=0
while(a<=10){
  console.log(a)
  a++
}
console.log("===========================")
let b=0
do{
  console.log(b)
  b++
}while(b<=10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
console.log("===========================")
for (i=10; i>=0; i--){
  console.log(i)
}
console.log("===========================")

let c=10
while(c>=0){
  console.log(c)
  c--
}
console.log("===========================")

let d=10
do{
  console.log(d)
  d--
}while(d>=0)

// Iterate 0 to n using for loop
let n
for(i=0; i<=n; i++){
  console.log(i)
}

// Write a loop that makes the following pattern using console.log():
for ( let i = 0; i < 7 ; i++ ) {
  let star = '*';


  for ( let j = 1; j <= i; j++ ) {
      star = star + '*';
  }

  star = star;
  console.log(star);
}

// Use loop to print the following pattern:

for(let i=0; i <=10; i*i) {
  console.log(`${i} x ${i} = ${i*i}`)
  i+=1
}

// Using loop print the following pattern
for(let i=0; i <=10; i*i) {
  console.log(`${i*i}`)
  console.log(`${i**2}`)
  console.log(`${i**3}`)
  i+=1
}


// Use for loop to iterate from 0 to 100 and print only even numbers

// Use for loop to iterate from 0 to 100 and print only odd numbers

// Use for loop to iterate from 0 to 100 and print only prime numbers

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//   [2550, 2500]
// Develop a small script which generate array of 5 random numbers

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// Develop a small script which generate a six characters random id:
