//Write a program that inputs a positive integer N. It should then output a message indicating whether the number is a prime number or not.
let N = parseInt(userInput)
if(N <= 1){
    console.log(`${N} is not a prime number`)
    return;
}
 for(let i = 2; i * i <= N; i++){
    if(N % i === 0){
        console.log(`${N} is not a prime number`)
        return;
    }
 }
 console.log(`${N} is a prime number`)