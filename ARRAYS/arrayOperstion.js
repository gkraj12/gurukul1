// Given an array arr of size n, Write a program to find the below 3 values.

//Sum of all the elements in the array.

//Average of all the elements in the array (Give the floor value).

//Maximum element in the array.

function arrayOperations(arr,n){
    
    let sum = 0
    let max = arr[0]
    for(let i =0; i<=n-1; i++){
        sum = sum + arr[i]
        if(arr[i]>max){
            max = arr[i]
        }
    }
    let avg = Math.floor(sum/n)
    return [sum, avg, max]
}

function arrayOperations(arr, n){
    let sum = 0
    let max = arr[0]


}
// print all 3 length subaaray
let arr = [10, 20, 30, 40, 50, 60, 70]
