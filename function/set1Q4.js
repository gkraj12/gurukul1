// write a function named track_calls() that keeps track of how many time it has been called .
// track_calls()=> called for 1 times 
// track_calls()=> called for 2 times 
// track_calls()=> called for 3 times
function track_calls() {
    let count = 0;
    return function() {
        count++;
        console.log("called for " + count + " times");
    }
}
let callTracker = track_calls();
callTracker(1);
callTracker(2);
callTracker(3);

function track_calls(){
    let count = 0
    count++
    console.log(`called for ${count} times`)
}

track_calls()
track_calls()
track_calls()



 