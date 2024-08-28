// what is promise

// Imagine you're waiting for a friend to pick you up for a movie. This scenario can be explained using a Promise in JavaScript:

// Pending: You call your friend and ask if they can pick you up. You're now waiting for their response. This waiting period is the "pending" state.

// Fulfilled: Your friend shows up on time. You get in the car, and you're off to the movie. This is the "fulfilled" state, similar to resolve in a Promise.

// Rejected: Your friend calls back and says they can't make it due to some emergency. You're left to find another way to get to the movie. This is the "rejected" state, similar to reject in a Promise.


//Promise will take time




setTimeout(prp, 2000)


let data = false;

function prp(){
 let promise = new Promise(function(resolve,reject){
    // data = true
    if(data){
        resolve("Data fatched success")
    }else{
        reject("data rejected")
    }
})

//.then => it handle resolve
// .catch => it handle reject

// console.log(promise)

promise.then(function(abc){
    console.log("promise fullfilled", abc)
}).catch(function(err){
    console.log("promise reject",err )
})


}

