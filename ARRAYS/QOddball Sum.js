// Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. Try to solve with and without reduce function.

let arr = [10,20,30,40,50]

function oddball_sum(nums){
    let sum = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i]%2 !==0){
            sum = sum + nums[i]
        }

    }
    console.log(sum)
}
oddball_sum(arr);