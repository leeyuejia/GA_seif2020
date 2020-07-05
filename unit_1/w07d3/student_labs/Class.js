class Pet {
    constructor (owner,name ) {
        this.owner = owner
        this.name = name
    }
    walk () {
        console.log("walka walka");
    }
}

class Dog extends Pet {
    constructor(price) {
        super ("pet shop", "mint")
        this.price = "$"+ price;
    }
    bark() {
        console.log("bark")
    }
    chaseTail() {
        console.log("oh boy oh boy oh boy")
    }
    getPrice() {
        return this.price;
    }
}

let corgi = new Dog(10);

console.log(corgi)
console.log(corgi.getPrice())
corgi.chaseTail()
corgi.bark()

class Cat extends Pet {
    constructor(price) {
        super("pet shop", "minnie")
        this.price = "$" + price;
    }
    purr() {
        console.log("purrrr")
    }
    clean() {
        console.log("cleaning")
    }
    getPrice () {
        return this.price;
    }
    walk () {
        console.log("strut strut")
    }
}

let minnie = new Cat(20)
// until changing of property
