// Given an array of integers, return an array of the elements in even indices (0th, 2nd, 4th, etc.).
function evenIndices(arr){
    let result = []
    for(let i = 0; i<=arr.length-1; i++){
        if(i%2==0){
            result.push(arr[i])
        }
    }
    return result;
}