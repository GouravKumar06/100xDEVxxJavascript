

function sortArray(arr1,arr2) {
    let arr = []
    
    for(let i=0;i<arr2.length;i++){
        if(arr1.includes(arr2[i])){
            if(!arr.includes( arr2[i] )){
                arr.push(arr2[i])
            }
        }
    }
    
    //sort the array 
    arr.sort()
    
    console.log(arr)
    
}

sortArray([5,4,8,2,6,7,2,1],[5,3,8,9,4,3,5,2,3,4,5])