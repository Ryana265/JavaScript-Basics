//Generate new array with values are subtracted from the total sum of values

var arr=[4,5,6]
total=15
for (let i in arr) {
    arr[i]=total-arr[i];
}
console.log(arr);
