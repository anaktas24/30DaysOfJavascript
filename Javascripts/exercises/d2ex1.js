const challenge = '30 Days Of JavaScript'
const array = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const a = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge)
console.log("----------------")
console.log(challenge.length)
console.log("----------------")
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log("----------------")
console.log(challenge.substring(0,2))
console.log(challenge.substring(2,21))
console.log("----------------")
console.log(challenge.includes('Script'))
console.log(array.split(','))
console.log("----------------")
console.log(challenge.replace('30 Days Of JavaScript','30 Days Of Python'))
console.log("----------------")
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log("----------------")
console.log(challenge.indexOf('a'))
console.log(a.indexOf('because'))
console.log(a.lastIndexOf('because'))
console.log(a.search('because'))
console.log("----------------")
console.log(challenge.trim())
console.log("----------------")
console.log(challenge.startsWith('30 Days'))
console.log(challenge.endsWith('Of JavaScript'))
console.log("----------------")
console.log(challenge.match('a'))
console.log(challenge.concat('30 Days Of', 'JavaScript'))
console.log(challenge.repeat(10))
