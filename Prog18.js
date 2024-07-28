// //write a program to find current age of a person
function calculatebirthyear(birthyear,currentyear=2024){
    let age=currentyear-birthyear;
    return age;
}
console.log(calculatebirthyear(2003));

//or 

const age=(dob)=>2024-dob
console.log(age(2003));
