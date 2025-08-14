//Determine whether a given calendar date is valid or invalid. A calendar date is valid if it meets the following rules:

//Month must be between 1 and 12.
//Day must fit the month and year:
//31-day months: January, March, May, July, August, October, December (1, 3, 5, 7, 8, 10, 12)
//30-day months: April, June, September, November (4, 6, 9, 11)
//February (2) has 29 days in a leap year and 28 days otherwise.
//Leap year criteria: A year is a leap year if it is divisible by 4 and not divisible by 100, unless also divisible by 400.
//You are given three integers: day, month, and year. Write a JavaScript function to determine whether the given date is valid or invalid.

//Input Three integers (each on its own line)

let date = 29
let month = 2
let year = 2025
let daysinmonth 

if(month< 1 || month > 12){
    console.log("Invalid")
} else {
    // 1 3 5 7 8 10 12
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        daysinmonth = 31
        // 4 6 9 11

    } else if(month === 4 || month === 6 || month === 9 || month === 11){
        daysinmonth = 30
    } else if((year % 4 === 0 && year % 100 !== 0) || (year% 4=== 0 && year % 400 === 0)){
        daysinmonth = 29
    } else {
        daysinmonth = 28
    }
}

if(date >= 1 && date <= daysinmonth){
    console.log("valid")
} else {
    console.log("invalide")
}