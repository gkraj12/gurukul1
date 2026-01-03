// 50 => 1, 2, 5, 10, 25, 50

// let n = 50

// for(let i = 1; i <= n; i++){
//     // 
//     if(n%i === 0){
//         console.log(i)    }
// }

// check a number is prime or not 
// let num = 13

// let isPrime = true
// for(let i = 2; i < num; i++){
//     if(num % i === 0){
//         console.log("true")
//         break
//     }else{
//         console.log("false")
//         break
//     }
       
// }

// let n = 13
// let count = 0
// for(let i = 1; i <= n; i++){
//     if(n%i === 0){
//         count++

//     }
// }
// if(count ===2){
//     console.log("prime")

// }else{
//     console.log("not prime")
// }

// // take two number find all common factors
// let a = 12
// let b = 18

// for(let i = 1; i <= a  ; i++){
//     if(a % i=== 0 && b % i === 0){
//         console.log(i)
//     }

// }

// find the hcf of two number 
// for(let i = a; i>= 1; i--){
//     if(a % i=== 0 && b % i===0){
//         console.log(i)
//         break
//     }
// }

// print all fast 10 multiples of a number 


// let num = 3

// for(let i = 1; i<= 10; i++){
//     console.log(num*i)
// }

let p = 20
let q = 30

let count = 0
for(let i= q; i>0; i++){
    if(i % p === 0 && i % q === 0){
        count++
        console.log(i, count)
    }
    if(count === 5){
        break 
    }
}









 