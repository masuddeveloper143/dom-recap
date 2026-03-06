const products = [
    { id: 1, name: "iphone", color: "black", price: 4000, brand: "apple" },
    { id: 2, name: "xiaomi", color: "ligthblue", price: 3000, brand: "apple" },
    { id: 3, name: "samsung", color: "gray", price: 2000, brand: "apple" },
    { id: 4, name: "syemphony", color: "blue", price: 1500, brand: "apple" },
    { id: 5, name: "itel", color: "white", price: 1000, brand: "apple" },
    { id: 6, name: "wolton", color: "green", price: 500, brand: "apple" },
];

// const newProducts = products.filter(product => product.price > 1000);
// console.log(newProducts);


// const newProducts = products.filter(product => product.color === "green");
// console.log(newProducts);


// const newProducts = products.filter(product => product.name === "iphone");
// console.log(newProducts);


const newProducts = products.find(p => p.color === "green");
console.log(newProducts);



// products.forEach(product => {
//     // console.log(product);

//     if(product.color === "black"){
//         console.log(product);
//     }
// })