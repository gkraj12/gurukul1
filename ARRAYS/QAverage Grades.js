// You are working on a project for a local school. The school has a list of student grades, stored in an array. Your task is to create a function that takes in an array of grades and returns the average grade.
let arr = [10,20,30, 40]
// let sum = 0
function averageGrade(arr) {
    let sum = 0
for(let i = 0;i<=arr.length-1;i++){
    sum = sum + arr[i]
}
console.log(sum /arr.length)
}
averageGrade(arr);