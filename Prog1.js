// // // Swapping Method 1 Using Temporary Variables
var n1=6;
var n2=7;
var t;
console.log("Before Swapping",n1,n2);
t=n1;
n1=n2;
n2=t;
console.log("After Swapping",n1,n2);

// // // Method 2 Without using temporary variables
var n1=6;
var n2=7;
console.log("Before Swapping",n1,n2);
n1=n1+n2;
n2=n1-n2;
n1=n1-n2;
console.log("After Swapping",n1,n2);
