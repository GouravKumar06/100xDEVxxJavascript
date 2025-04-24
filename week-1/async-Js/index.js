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