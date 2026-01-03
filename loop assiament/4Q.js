// write a program that takes a number of days as input and converts it into years, month remaining days. assume
// 1 year = 365 days
// 1 month = 30 days

let days = 400
let years = Math.floor(days / 365)
let remainingDays = days % 365
let month = Math.floor(remainingDays / 30)
let day = remainingDays % 30
console.log(`${years} year, ${month} month, ${day} days`)
