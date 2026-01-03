// let arr = [10,20,30,40,50,60,70,80,90] // aray should be sorted

// let x = 80

// let start = 0
// let end = 8

// let mid = (start+end)/2 // 4 => [50]

// if(arr[mid]== x){
//     console.log("Number found")
// }

// else if(x < arr[mid]){ // arr[mid]> x
//     end = mid-1
// }

// console.log(arr.slice(0, end +1))

let arr = [10,20,30,40,50,60,70,80,90]

let x = 34

let start = 0
let end = 8

console.log("arr at start", arr)
let flag = false

while(start <= end){

    let mid = parseInt((start + end)/2)
    console.log("middle element", arr[mid])

    if(arr[mid] == x){
        console.log("Number found")
        flag = true
        break
    }
    else if(x < arr[mid]){
        end = mid - 1
    }
    else if(x > arr[mid]){
        start = mid + 1
    }
    console.log("arr at end", arr.slice(start, end + 1))
}

if(flag == false){
    console.log("Number not found")
}