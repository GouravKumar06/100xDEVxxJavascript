**I/o heavy operation**

1. fs.readFile()         ```if i does not write encoding it return me Buffer```
2. fs.writeFile()
3. starting a clock      ```setTimeout``` 
4. HTTP Requests


**fs.readFile() vs fs.readFileSync()**



**CPU Bound task**
```CPU-bound tasks are operations that are limited by the speed and power of the CPU.``
```Javascript
    let ans = 0;
    for (let i = 1; i <= 1000000; i++) {
        ans = ans + i
    }
    console.log(ans);	
```

**I/o Bound task** 
```Javascript
    const fs = require("fs");

    const contents = fs.readFileSync("a.txt", "utf-8");
    console.log(contents);

```


```Javascript
    const fs = require('fs');

    console.log("start")

    const answer = fs.readFile('./file.txt', 'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("file read successfully")
            return data;
        }
    });
    console.log(answer)   // it alwasy returns undefined because the readFile function is asynchronous and the console.log() runs before the file is read

    console.log("end")
```

**To avoid the above problem we have to use ``async/await`` or ```use callback``` on the ``readFile()`` method**

**1. Callback Style (Old School but works)**
```Javascript
    const fs = require('fs');

    fs.readFile('./file.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading:", err);
            return;
        }

        console.log("Read successful. Writing now...");

        fs.writeFile('./copy.txt', data, (err) => {
            if (err) {
                console.error("Error writing:", err);
            } else {
                console.log("✅ File copied successfully!");
            }
        });
    });
```

**2. Async/Await Style (Modern + Cleaner)**
```javascript 
    const fs = require('fs').promises;

    async function copyFileContent() {
        try {
            console.log("Reading file...");
            const data = await fs.readFile('./file.txt', 'utf-8');

            console.log("Writing to new file...");
            await fs.writeFile('./copy.txt', data);

            console.log("✅ Done! File content copied.");
        } catch (err) {
            console.error("❌ Error:", err.message);
        }
    }

    copyFileContent();
```


**3. Bonus: Want to make this reusable?**
```javascript
    async function copyFile(src, dest) {
        const fs = require('fs').promises;
        try {
            const data = await fs.readFile(src, 'utf-8');
            await fs.writeFile(dest, data);
            console.log(`✅ Copied from ${src} to ${dest}`);
        } catch (err) {
            console.error(`❌ Error copying file: ${err.message}`);
        }
    }

    copyFile('file.txt', 'backup.txt');
```


