function add(a,b){
    return a+b;
}

const result = add(2,3);
console.log(result); // 5



function sum(num){
    let total = 0;
    for(let i=1; i<=num; i++){
        total += i;
    }

    return total;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);