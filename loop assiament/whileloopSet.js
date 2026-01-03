// take a number and print its even factors
// let n = 106
// for(let i = 1; i<= n; i++){
//     if(n % i ==0 && i% 2 ==0){
//         console.log("Even factor", i)
//     }
// }


// let n = 106
// let i = 1
// while( i<=n ){
//     if(n % i ==0 && i % 2 ==0){
//         console.log("Even factor", i)
         
//     }
//     i++
// }


// let i = 1
// while(i<=5){
//     if(i==3){
//         break
//     }
//     console.log(i)
//     i++
// }

// let  i = 1
// while(i<=5){
     
//     if(i==3){
//         continue
//     }
//     console.log(i)
//     i++
// }









// take a number and diaply all its digit, 345 => 3,4,5

// let n = 345

// // last = n  % 10
// // remaning = parseInt(n / 10)

//   while( n>0){
//     let last = n %10
//     let remaning = parseInt(n/10)
//     console.log(last)
//     n = remaning 
//   }


// let n = 324
// let sum = 0
// while(n>0){
//     let last = n % 10
//     sum = sum + last 
//     n = parseInt(n/10)
// }
// console.log(sum)
   
// let n = 324
// for(let i = n; i>0; i = parseInt(i/10)){
//     let last = i % 10 
//     console.log(last)
// }
// take a number and print it in reverse in = 324 => 423
// let n = 324
// let rev = 0
// while(n>0){
//     let last = n % 10
//     console.log(last)
//     rev = rev *10 + last
//     n = parseInt(n/10)
// }
// console.log(rev)

// take a numer anc check it is pollindrom or not 
// let n = 121 
// let temp = n
// let rev = 0
// while(n>0){
//     let last = n % 10
//     console.log(last)
//     rev = rev *10 + last
//     n = parseInt(n/10)
// }
// console.log("n", n)
// console.log("rev", rev)
// if(rev== temp){
//     console.log("pallindrome")
// }
// else{
//     console.log("Not")
// }

// let n = 1254
//    let  rev = 0
//    while(n>0){
//     let last = n%10
//     rev = rev *10 + last 
//     n = parseInt(n/10)
//    }
//    console.log("rev", rev)

//    n = rev // 4521
//    while(n>0){
//     let last = n%10
//     console.log(last)
//     n = parseInt(n/10)
//    }

let n = 1254
let temp= n
let count = 0
while(n>0){
    let last = n %10
    count++
    n = parseInt(n/10)

}
console.log("count", count)

 let c = count -1
 n = temp
 while(c>=0){
    let startDigits=parseInt( n/(10**c))
    console.log(startDigits%10)
    c = c-1
 }