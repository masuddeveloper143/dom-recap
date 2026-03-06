// const numbers = [1, 33, 4, 5, 6, 7, 7, 8, 8, 5];
// let twmp = []

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const sum = element + 1;
//     twmp.push(sum)
// }

// console.log(twmp);


// const newArray = numbers.map(value => value + 1);
// console.log(newArray);

// const newArray = numbers.map(number => console.log(number));
// console.log(newArray);


// const newArray = numbers.map(number => {
//     return number + 1;

// });
// console.log(newArray);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const squareArray = numbers.map(element => element * element);

// console.log(squareArray);

// console.log(newArray);



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const squareArray = numbers.map(element => {
//     return element * element;
// });

// console.log(squareArray);




// const friends = ["masud", "rubel", "romjan", 'forhad'];

// for (let i = 0; i < friends.length; i++){
//     console.log(i);
// }


// const friends = ["masud", "rubel", "romjan", 'forhad'];

// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];

//     console.log(element);
// }




// short way 
// const friends = ["masud", "rubel", "romjan", 'forhad'];

// const newFriends = friends.map(element => {
//     console.log(element)
// });


// short way 
const friends = ["masud", "rubel", "romjan", 'forhad'];

const newFriends = friends.map((element, index) => {
    console.log(index);
    return element;
});

console.log(friends);