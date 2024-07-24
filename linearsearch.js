function linearSearch(array,toFind){
    for (let i = 0; i < array.length; i++) {
        if(array[i]===toFind){
            return i;
        }
        return-1;
    }
}
console.log(linearSearch([5,6,8,8],9));
