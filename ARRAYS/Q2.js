// Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. Try to solve with and without reduce function.

// let arr = [1, 3, 5, 4]
// function oddball_sum(arr){
//     let sum = 0
//     for(let i =0; i<=arr.length-1; i++){
//         if(arr[i]%2 !==0){
//             sum += arr[i]
//         }
//     }
//     console.log(sum)
// }

function oddball_sum(nums){
  
    let sum = 0
    for(let i =0; i<=nums.length-1; i++){
        if(nums[i]%2 !==0){
            sum = sum+nums[i]
        }
    }
    console.log(sum)
}