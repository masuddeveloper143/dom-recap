fetch('https://jsonplaceholder.typeicode.com/todos/1')
    .then(res => console.log(res.json()))
    .then(data => {
        console.log(data);
    });