const fecthData = () => {
    return new Promise((reslove, reject)=>{
        const status = true;
        if (status) {
            const mockData = {
                JSON: () => Promise.resolve({ name: "hero" })
            }
            reslove(mockData)
        }
        else {
            reject("server erro")
        }
    })
}

fecthData()
    .then(res => res.JSON())
    .then(data => console.log(data))
    .catch(err => console.log(err))