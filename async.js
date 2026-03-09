const handleData = async () => {

    try {

        console.log("ami prothom")
        console.log("ami second")


        const response = await fetch('https://jsonplaceholder.typicode.com/todos')

        const data = await response.json();


        console.log(data)
        const result = 10 + 10;
        console.log(result)
        console.log('ami therd')
    }
    catch {
        console.log('error')
    }
}



handleData();