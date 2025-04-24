

function setTimeoutPromisified(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(ms < 0) {
                reject("Negative time is not allowed");
            }
                resolve(`Promise resolved after ${ms} milliseconds`);
        }, ms);
    });
}

function callback() {
  console.log("time taken");
}

const promise = setTimeoutPromisified(3000)
const promise2 = setTimeoutPromisified(2000).then(callback)


console.log("promise: ", promise)
console.log(    "promise2: ", promise2)
