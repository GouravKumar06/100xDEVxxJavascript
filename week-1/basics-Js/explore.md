### **what is thread in javascript**
```A thread is like a worker that executes tasks.```
```JavaScript is a single-threaded language by default```
```It uses something called the event loop to handle asynchronous tasks without blocking the thread```

### **what is the difference between var,let and const**
| Feature              | var                          |             let                      | const                     |
|----------------------|----------------------------  |--------------------------------------|---------------------------|
| Scope                | Function-scoped              | Block-scoped `{}`               | Block-scoped `{}`            | 
| Re-declaration       | Allowed                      | ❌ Not allowed                  | ❌ Not allowed                |  
| Re-assignment        | ✅ Allowed                   | ✅ Allowed                     | ❌ Not allowed                  |
| Hoisting             | ✅ Hoisted (but `undefined`) | ✅ Hoisted (but not accessible)| ✅ Hoisted (but not accessible) |
| Temporal Dead Zone   | ❌ No                        | ✅ Yes                         | ✅ Yes                           |


### **what features are introduce in es6 and what was the benefits of that features over old one give atleast 5 features**
```let and const```
```Arrow Functions (=>)```
```Template Literals```
```Destructuring Assignment```
```Assign default values to function parameters.```


### **difference between post and pre increment**
```javascript  (post)
  let x = 5;
  let y = x++; // y = 5, x = 6 
```


```javascript (pre)
  let x = 5;
  let y = ++x; // y = 6, x = 6

```