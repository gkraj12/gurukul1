//Write a program to count the elements in an array which are greater than 35.

function countGreaterThan(arr){
    let count = 0
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]>35){
            count = count +1
        }
    }
    return count;
}