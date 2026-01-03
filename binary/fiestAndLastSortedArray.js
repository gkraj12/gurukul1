
let arr = [10,20,30,40,40,40,40,40,40,50]

let x = 40

// first inde of x in sorted array 

// last ide of  in sorted array
// // 
// let index = -1

// for(let i = 0; i<=arr.length; i++){
//     if(arr[i]== x){
//         console.log(i)
//         break
//     }
// }

// for(i = 0; i<=arr.length; i++){
//     if(arr[i]==x){
//         index = i
//     }
//     else if(index != -1){
//         break
//     }
// }
// console.log(index)


 

let firstIndex = -1
let lastIndex = -1
let start = 0
let end = arr.length-1

while(start <= end){

    let mid = Math.floor((start + end)/2)
    if(arr[mid]== x){
        firstIndex = mid
        end = mid -1
    //    console.log(firstIndex, arr.slice(start, end + 1))
    }
    else if(x < arr[mid]){
        end = mid -1
    }
    else if(x > arr[mid]){
        start = mid +1
    }
    console.log(firstIndex, lastIndex, arr.slice(start, end + 1))
}