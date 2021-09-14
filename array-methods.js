const products = [
    {name: "laptop", brand:"asus", price: 57500, color: "teal"},
    {name: "phone", brand:"nokia", price: 1750, color: "black"},
    {name: "watch", brand:"nameless", price: 370, color: "blue"},
    {name: "headphone", brand:"UiiSii", price: 650, color: "black"},
    {name: "bike", brand:"yamaha", price: 375000, color: "black"},
    {name: "camera", brand:"Canon", price: 89000, color: "black"}
];

// 1. map (return a value)

const brands = products.map(product => product.brand);
// console.log(brands);

// 2. forEach (doesn't return)
// products.forEach(product => console.log(product.name));

products.forEach(product => {
    // do tasks
});

// 3. filter (returns an array)

const expensiveProducts = products.filter(product => product.price > 50000);
// console.log(expensiveProducts);

const specificName = products.filter(product => product.name.includes("phone"));
// console.log(specificName);

// 4. find (return first matched element)

const special = products.find(product => product.color.includes("black"));
// console.log(special);