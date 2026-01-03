// Given an unsorted integer array of size n. Find the last occurrence of a given key.

// The key is always present in the array.

let arr = [7 , 5, 1 , 5, 2, 5, 3,5, 8 ]
function findIndex(key,arr){
    for(let i = arr.length-1;i>=0;i--){
        if(arr[i]==key){
            console.log(i)
            break
        }
    }
}
findIndex(5, arr);  