//Print all the duplicate elements in an array arr=[10,6,7,8,10,5,7,3,5]


function duplicateelements(arr){
    let duplicates=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]===arr[j]){
                if(!duplicates.includes(arr[i])){
                    duplicates.push(arr[i]);
                }
            }
        }
    }
    return duplicates;
}
const arr=[10,6,7,8,10,5,7,3,5];
console.log(duplicateelements(arr));
