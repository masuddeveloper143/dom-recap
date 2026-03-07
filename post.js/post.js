const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(Response => Response.json())
        .then(data =>{

            console.log(data)
            displayPost(data)
        } )
}

const displayPost = (posts) =>{
    
}

handlePost()