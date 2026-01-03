// let arr = [10,20,30,40,50]

// // arr.pop()
// // arr.pop()
// // console.log(arr)

// arr.push(100)

// let x = arr .push(100,300,500)
// console.log(arr)
// console.log(x)

//  shift (remove) and unshift (add)

// let arr= [10,20,30,40,50]
 
// // let  x = arr.shift()

// let x = arr.unshift(100,300,500,800)
// console.log(arr,x)
let arr = [10,21,30,43,50,65]

let evenArray = []
let oddArray = []

for(let t of arr){
    if(t%2==0){
        evenArray.push(t)

}else{
    oddArray.push(t)

  }
}
console.log(evenArray,oddArray )
 

