// let arr = [2 , 4 , 6, 8, 10]

// let x = 5

// // case 1: elsement  just less than 5 => Floor of x

// // 2: elsement just greater than 5 => ceil of x

// let floorNumber 
// for(let t of arr){
//     if(t <= x){
//         floorNumber = t 
//     }
//     else{
//         break
//     }

// }
// console.log(floorNumber)

let arr = [2 , 4 , 6, 8, 10]

// let x =5
// let floorNumber

// let start = 0 
// let end = arr.length-1

// while(start <= end){
//     let mid = Math.floor((start + end)/2)
//     if(arr[mid] == x){
//         // console.log(x)
//         floorNumber = x
//         break
//     }
//     else if( x < arr[mid]){
//         end = mid -1
//     }
//     else if(x > arr[mid]){
//         start = mid +1
//     }

// }

// console.log(start , end)

let x = 3
let ceilNumber 

let start = 0
let end = arr.length-1

while(start <= end){
    let mid = Math.floor((start + end)/2)

    if(arr[mid]== x){
        ceilNumber = x
        break
    }
    else if(x <arr[mid]){
        ceilNumber = arr[mid]
        end = mid -1
    }
    else if(x > arr[mid]){
        start = mid + 1
    }
    console.log(ceilNumber , arr.slice(start , end +1))
}
console.log(ceilNumber)