const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(Response => Response.json())
        .then(data =>{

            console.log(data)
            displayPost(data)
        } )
}

const displayPost = (posts) =>{
    const postContainer = document.getElementById('postContainer');

    for(let post of posts){
        
    }
}

handlePost()