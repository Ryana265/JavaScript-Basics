// // write a program to print a number in reverse order
input=123;
str="";
while(input!=0){
    lastDigit=input%10;   //123%10=12.3
    str+=lastDigit
    input=Math.floor(input/10);
}
console.log(str);
