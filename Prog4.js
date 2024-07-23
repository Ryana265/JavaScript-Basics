//Write a program  to print the marks of a student in an object using for loop
//Stud={ Amal=78,Kiran=98,Rahul=87}

let Stud={ 
    Amal:78,
    Kiran:98,
    Rahul:87
};
for (let student in Stud) {
    console.log(`${student}=>${Stud[student]}`);
}
