//Find common elements in both arrays
	//arr1=[5,7,8,3,];
	//arr2=[7,8,2,1];

function commonelements(arr1,arr2){
    let common=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                if (!common.includes(arr1[i])) { 
                    common.push(arr1[i]);
            }
        }
    }
}
    return common;
}
let arr1=[5,7,8,3,];
let arr2=[7,8,2,1];
console.log(commonelements(arr1,arr2));

 
