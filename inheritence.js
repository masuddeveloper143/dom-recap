class vahical {
    constructor(name, price) {

        this.name = name;
        this.price = price;

    }
    move() {
        console.log('ami colacol korte pari');

    }

}



class Bus extends vahical {
    constructor(name, price, seat) {


        super(name, price);
        this.seat = seat;
    }

    route() {
        console.log("dhaka to cox");
    }

}


class truck extends vahical {
    constructor(name, price, lode) {
        super(name, price)
        this.lode = lode;
    }
    lode() {
        console.log("one day howmany trip");
    }
}