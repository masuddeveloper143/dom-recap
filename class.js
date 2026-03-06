class product {
    malik = "masud";

    constructor(name, price, brand, malik) {

        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.malik = malik;

        // console.log(name, price,brand);

    }

    detles() {
        console.log("ami deailes", this.name)
    }
}


const ipone = new product("iphone", "1234", "apple", "joob");
ipone.detles()

// const iphone = new product();
// console.log(iphone.detles);


// const iphone = new product();
// iphone.detles();