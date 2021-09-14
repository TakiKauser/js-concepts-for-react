// 1. array destructuring

const array3 = [36, 24];
const [x, y] = array3;
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
const [first, second] = boxify(x, y);
// console.log(first, second, first);

const actor = {
    name: "Tom Cruise",
    age: 39,
    movies: ["Titanic", "Mission Impossible", "Inception"]
};

const [firstMovie, secondMovie, thirdMovie] = actor.movies;
// console.log(thirdMovie);


// object destructuring
const { name, age } = actor;
// console.log(age);

const employee = {
    name: "kb",
    designation: "Dev Head",
    age: 29,
    machine: "macbook",
    languages: ["javascript", "C", "typescript"],
    ide: "VS Code",
    specification: {
        height: 69,
        weight: 59,
        location: "Bangladesh",
        drink: "Alcohol",
        watch: {
            color: "black",
            price: 670,
            brand: "Casio"
        }
    }
};

const { machine, ide } = employee;
const { height, drink } = employee.specification;
const {brand} = employee?.specification?.watch; // optional chaining

// console.log(ide, drink, brand);