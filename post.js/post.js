const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(Response => Response.json())
        .then(data =>{
            displayPost(data)
        } )
}

// const displayPost = (posts) =>{
//     console.log(posts)
// }

// handlePost()