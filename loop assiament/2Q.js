// take two integers a,b and print all the even number in between then , excluding the inut integers 

let a = 3
let b = 12

for(let i= a+1; i<= b-1; i++){
    if(i%2 == 0){
        console.log(i)
    }
}