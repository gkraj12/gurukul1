//Take a 2 digit number and print the reverse of that number


let number = 65

let lastdDigit = number % 10
let firstDigit = Math.floor(number/10)

let reversedNumber = lastDigit * 10 + firstDigit

console.log("Reversed number", reversedNumber)