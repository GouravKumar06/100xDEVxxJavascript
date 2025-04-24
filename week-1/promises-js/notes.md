**A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.** 


**Promise**
```Javascript

    const promise = new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected.");
        }
    })

    console.log(promise) 

    promise.then((result) => {
        console.log(result); // This will run if the promise is resolved    
    }).catch((error) => {
        console.error(error); // This will run if the promise is rejected
    })

```

**1. Promisified version of setTimeOut()**
```Javascript 

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
```

**2.. Promisified version of fetch()**
```Javascript
    const fetch = require('node-fetch'); // if you're on Node.js < 18

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log("Fetched data:", data))
    .catch(err => console.error("Fetch error:", err));
```  

**3.. Promisified version of fs.readFile()**
```Javascript
    const fs = require('fs');
    const { promisify } = require('util');
    const readFile = promisify(fs.readFile);

    readFile('example.txt', 'utf-8')
    .then(data => console.log("File content:", data))
    .catch(err => console.error("Read error:", err));

```  

**3.. Promisified version of fs.writeFile()**
```Javascript
    const writeFile = promisify(fs.writeFile);

    writeFile('example.txt', 'Hello Gaurav! from promise')
    .then(() => console.log("File written successfully"))
    .catch(err => console.error("Write error:", err));


```  


**3.. Promisified version of fs.unlink()**
```Javascript
    const unlink = promisify(fs.unlink);

    unlink('example.txt')
    .then(() => console.log("File deleted successfully"))
    .catch(err => console.error("Delete error:", err));


```  
