

function countDigits(n){
    let count = 0
    while(n > 0){
        // let last = n%10
        count++
        n = parseInt(n/10)
    }
    return count
}


//console.log(countDigits(12345))

function digitSum(n){
    // let numberOfDigits = countDigits(n)
    let sum = 0
    while(n>0){
        let last = n%10
        sum = sum +(last**numberOfDigits(n))
        n = parseInt(n/10)

    }
    return sum
}

// digitSum(34567)

let n = 124
let sum = digitSum(n)
if(n== sum){
    console.log("Armstrong")
}
else{
    console.log("Not Armstrong")
}

