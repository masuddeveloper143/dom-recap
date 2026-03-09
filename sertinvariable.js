// console.log(1)
// console.log(2)
// console.log(3)

// setTimeout(() => {
//     console.log("hello")
// }, 4000)

// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)





// console.log(1)
// console.log(2)
// console.log(3)

// setInterval(() => {
//     console.log("hello")
// }, 3000)

// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)



console.log(1)
console.log(2)
console.log(3)

let count = 0;

const clockID = setInterval(() => {
    count++;
    console.log(count);

    // clearInterval(clockID);
    if (count >= 300) {
        clearInterval(clockID);
        console.log('timeer fhished')
    }

}, 50)

console.log(4)
console.log(5)
console.log(6)
console.log(7)