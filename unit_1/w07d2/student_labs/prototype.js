// function Shape (name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
// }
  
// Shape.prototype.calcPerimeter = function () {
//     return this.sideLength * this.sides;
// };

// const square = new Shape('square', 4, 5);

// console.log(square.calcPerimeter());

// const triangle = new Shape('triangle', 3, 3);

// console.log(triangle.calcPerimeter());

class Shape {
    constructor (name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter () {
        return this.sideLength * this.sides;
    }
}

const triangle = new Shape('triangle', 3, 3);

console.log(triangle.calcPerimeter());

class Square extends Shape {
    constructor (sideLength) {
        super('square', 4, sideLength);
    } 
    calcArea () {
        return this.sideLength ** 2;
    }
}

const square = new Square(10);
console.log(square.calcPerimeter());
console.log(square.calcArea());