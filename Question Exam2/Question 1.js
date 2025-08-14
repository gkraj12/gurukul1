// write a program that takes a number of days as inpute and converts it into year , month and remaining days .Assume

//1 year = 365 Days 
//1 month = 30 Days 

let days =  400

let year = Math.floor(days / 365)
   days = days % 365
   let month = Math.floor(days / 30)
   days = days % 30
   let remainingDays = days % 365

   console.log(`${year} year , ${month} month , ${remainingDays} days`)

//  let d = 800

// let year = parseInt(d/365)
//  let remainingDays = d % 365
// let month = parseInt(remainingDays/30)
  
// let days = remainingDays % 30

// console.log(`${year}Year, ${month} Month , ${days} Days`)