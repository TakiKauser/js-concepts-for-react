// falsy
const falsy = ['', 0, false, null, undefined];

// truthy
const truthy = ["string", 9, true, {}, []];

// check truthy
let variable = 94;
if (variable) {
    variable *= 0;
}
// check falsy
else if (!variable) {
    variable *= 1;
}
// console.log(variable);

// ternary
const money = 199;
let food = (money > 100 || variable > 49) ? "biriyani" : "biri";
// console.log(food);

// string to number
const randomNumber = 99;
const randomNumberString = randomNumber + "";
// string to number
const randomNumberStringNumber = +randomNumberString;

// console.log(randomNumber, randomNumberString, randomNumberStringNumber);

// 
let isActive = true;
const showUser = () => console.log("Display User");
const hideUser = () => console.log("Hide User");
// isActive ? showUser() : hideUser();

// use && if the left portion is true then right portion will be executed
isActive && showUser();
// use || if the left portion is false then right portion will be executed
isActive || hideUser();

// toggle
isActive = !isActive;
console.log(isActive);