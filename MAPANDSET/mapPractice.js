// let arr = [10,20,10,30,10,20,10,20,30,10,20]

// frequency count : 

// let map = new Map()

// for(let t of arr){
//     if(map.has(t)){
//         let prevValue = map.get(t)
//         map.set(t, prevValue +1)
//     }
//     else{
//         map.set(t,1)
//     }
// }
// console.log(map)


let arr = [10, 1,4,5,3,7,9,11]

let sum = 7
// let map = new Map()

// for(let i = 0; i<arr.length; i++){
//     let complement = sum - arr[i]
//     if(map.has(complement)){
//         console.log(`pair found: ${arr[i]}, ${complement}`)


//     }
//     map.set(arr[i], i)
// }
// console.log("No pair found")

let map = new Map()

for(let t of arr){
    map.set(t,1)

}

for(let t of arr){
    let firstNumber = t
    let secondNumber = sum- firstNumber 
    if(map.has(secondNumber)== true){
        console.log(firstNumber, secondNumber)
    }
}