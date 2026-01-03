// You are given an integer array Arr of size N and a number X. You need to print all the indexes of the given X in the array, else print -1.
function findIndex( N, X , arr){
    let result = []
for(let i = 0;i<=N.length-1; i++){
    if(arr[i]==X){
        result.push(i+1);
    }
}
 if(result.length>0){
    console.log(result.join(' '))

 }else{
    console.log(-1)
 }

}

 
function indexOfElement(N, X, arr) {
  // write code and print here
  let result = [];

  for (let i = 0; i < N; i++) {
    if (arr[i] === X) {
      result.push(i + 1); 
    }
  }

  if (result.length > 0) {
    console.log(result.join(' '));
  } else {
    console.log('-1');
  }

}