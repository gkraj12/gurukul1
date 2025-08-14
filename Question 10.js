// Take a 3 digit number and print the reverse of that number

let number = 123

let lastDigit = number % 10
let middleDigit = Math.floor((number % 100)/10)
let firstDigit = Math.floor(number/100)

let reversedNumber = lastDigit*100 + middleDigit*10+ firstDigit

console.log("Reversed number", reversedNumber)