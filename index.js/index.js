const loasUser = () => {
    // console.log("clicked button")

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())

        .then(data => showUser(data))

    // .then(data =>  {
    //     // console.log(data[0]);
    //     // showUser(data)

    // })

}

const showUser = (users) => {
    console.log(users);
}




// const showUser = (users) => {
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i]
//         console.log(user);
//     }
// }

