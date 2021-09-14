const array1 = [27, 94, 86, 19, 17, 28, 36, 24, 36];

const person = {
    name: "kb",
    age: "27",
    position: "company owner"
}

// 1. template string

const about = `My name is ${person.name}. I'm ${array1[0]} years old`;
console.log(about);

// 2. arrow function

// 2.1 parameter-less
const getSixtyNine = () => 69;
// 2.2 single parameter
const getTripledValue = number => number * 3;
const isEven = (x) => x % 2 == 0;

// 2.3 multiple parameter
const getMultipliedValue = (x, y, z) => x * y * z;

// 2.4 multi line function (explicit return)

const doMath = (x, y, z) => {
    const sum = x + y;
    return sum / z;
}

// 3. spread operator

const array2 = [89, ...array1];
array1.push(93);
// console.log(array2, array1);