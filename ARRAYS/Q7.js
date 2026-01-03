// Given an array of N elements, your task is to update every element with multiplication of previous and next elements with following exceptions:- a) First element is replaced by multiplication of first and second. b) Last element is replaced by multiplication of last and second last.

function updateArray(arr, N){
    let result = []
    for(let i = 0; i<=N-1; i++){
        if(i==0){
            result.push(arr[i]*arr[i+1])
        }else{
            if(i==N-1){
                result.push(arr[i]*arr[i-1])
            }else{
                result.push(arr[i-1]*arr[i+1])
            }
        }
    }
    return result;
}