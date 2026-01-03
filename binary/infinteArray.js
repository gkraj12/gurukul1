let arr = [10, 20, 30, 40, 50, 60, 70, , , , , , , ,
]

// array it has infinite element (sorted )

let x = 55 

start = 0
end  = 1

end = end *2
while(x > arr[end]){
    start = end
   end = end * 2
}
// console.log(start , end)

console.log(binarySearch (arr , start , end , x))

function binarySearch(arr, start, end, x) {
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}