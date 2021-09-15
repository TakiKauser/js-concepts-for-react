// 1. JSON

const actor = {
    name: "Tom Cruise",
    age: 39,
    movies: ["Titanic", "Mission Impossible", "Inception"]
};
const actorJSON = JSON.stringify(actor);
// console.log(actor);
// console.log(actorJSON);

const actorObject = JSON.parse(actorJSON);
// console.log(actorObject);

// 2. fetch
/* 
fetch("url")
    .then(response => response.json())
    .then(jsonData => console.log(jsonData));
 */

// 3. keys, values

const keys = Object.keys(actor);
const values = Object.values(actor);

// 4. for

const array4 = [27, 94, 86, 19, 17, 28, 36, 24, 36, 89];

array4.forEach(number => { //doesn't return
    // console.log(number);
});

array4.map(number => number * 3); //returns an array

// "for of" -> on array like object
// "for in" -> on object

const products0 = [
    { name: "laptop", brand: "asus", price: 57500, color: "teal" },
    { name: "phone", brand: "nokia", price: 1750, color: "black" },
    { name: "watch", brand: "nameless", price: 370, color: "blue" },
    { name: "headphone", brand: "UiiSii", price: 650, color: "black" },
    { name: "bike", brand: "yamaha", price: 375000, color: "black" },
    { name: "camera", brand: "Canon", price: 89000, color: "black" }
];

// 5. add or remove from an array

const products1 = { name: "shoe", price: 4999, color: "black", brand: "lotto" };
// 5.1 copy products array & then add new products

const products2WithExtraProduct = [...products0, products1];
// console.log(products2WithExtraProduct);

// 5.2 create a new array without a specific item

const products3WithoutSpecificProduct = products0.filter(product => product.color !== "blue");
// console.log(products3WithoutSpecificProduct);