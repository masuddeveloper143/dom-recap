const handleUser3 = async () => {


    try {
        const response = fetch("https://jsonplaceholder.typicode.com/users");



        const data = (await response).json();
        console.log(data);

    }

    catch {
        console.log("hello")
    }
}

handleUser3()