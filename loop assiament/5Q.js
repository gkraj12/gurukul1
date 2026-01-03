// determine whether a given calender is valid or invalid . A  calender date is valid if it meet the following rules

// month must be between 1 and 12
// day must fit the month and year 
// 31 day month - jan, march, may , july, august , october, december
// 30 day month - april, june, september, november
// february (2) has 29 days in a leap year and 28 days otherwise
// leap year criteria A year is a leap year if it is divisible by 4 not divisible by 100 unless also divisible by 400

let day = 29
let month = 2
let year = 2024
let daysInmonth
if(month < 1 || month > 12){
    console.log("invalid month")

}else{
     
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        daysInmonth = 31

    }else if(month === 4 || month === 6 || month ===
        9 || month === 11){
            daysInmonth = 30

        }else if((year  % 4 === 0 &&  year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0)) {
            daysInmonth = 29
        } else{
            daysInmonth = 28
        }
}
if(day >= 1 && day <= daysInmonth){
    console.log("valid day")

}else{
    console.log("invalid day")
}








