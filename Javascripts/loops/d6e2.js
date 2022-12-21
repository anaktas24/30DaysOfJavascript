//Develop a small script which generate any number of characters random id:

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.random() * charactersLength);
    }

    return result;
}

console.log(generateString(10));

//Write a script which generates a random hexadecimal number.

const hexx = 'abcdef012345678abcdef9'

function generateHex(length) {
    let result = ' ';
    const hexxLength = hexx.length;
    for ( let i = 0; i < length; i++ ) {
        result += hexx.charAt(Math.random() * hexxLength);
    }

    return result;
}
console.log(generateHex(6));

//Write a script which generates a random rgb color number.

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;
console.log(randomBetween(0,255))
