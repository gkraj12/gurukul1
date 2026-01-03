// Given an unsorted integer array of size n. Find the last occurrence of a given key.


// let arr = [7 ,5,
// 8 ,5, 1 ,4, 5 ,3 ,2]
// function lastOccurrence(arr,key){
//     for(let i = arr.length-1; i>=0; i--){
//         if(arr[i]===key){
//          console.log(i)
//          break
//         }
//     }
// //     return -1;
// }
// // console.log(lastOccurrence(arr, 3));

function findIndex(key, arr) {
  //Your code goes here

  for(let i = arr.length-1; i>=0; i--){
        if(arr[i]===key){
         console.log(i)
         break
        }
    }
}