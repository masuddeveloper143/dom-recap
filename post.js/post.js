const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())
        .then(data =>{
            displayPost(data)
        } )
}

const displayPost = (posts) =>{
    console.log(posts)
}

handlePost()