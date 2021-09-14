// 1. declare a variable using let & const
const myName = "kb";
let age = 27;

// 2.1 6 basic conditions (>, <, ===, !==, >==, <==)
// 2.2 (&&, ||)

if (myName === "kb" || age !== 27){
    console.log("you'be grown up, dude!");
}
else if (myName === "kb" && age === 27){
    console.log("grow up, dude!");
}
else{
    console.log("I'mpossible!");
}

// 3. array (index, length, push)

const array0 = [94, 86, 19];
array0.push(34);
// console.log(array0[0], array0.length, array0);

// 4. loop

for (let i = 0; i < array0.length; i++){
    const number = array0[i];
    // console.log(number);
}

// 5.function

function multiply(num1, num2){
    return num1 * num2;
}
const multipliedResult = multiply(7, 9);
// console.log(multipliedResult);

// 6. object (property access[3 ways])

const student = {
    name: "kb",
    age: "27",
    position: "company owner"
}

const aim = "position";

console.log(student.name); // direct access by property
console.log(student["age"]); // access by property name string
console.log(student[aim]); // access via property name variable 