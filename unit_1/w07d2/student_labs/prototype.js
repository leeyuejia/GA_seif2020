// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;    
//   }

//   Shape.prototype.calcPerimeter = function () {
//       return this.sideLength * this.sides;
//   };

//   const square = new Shape('square', 4, 5);

//   const triangle = new Shape('triangle', 3,3);

//   console.log(triangle.calcPerimeter());


  //USING ES6 syntex
  class shape {
      constructor (name, sides, sideLength) {
          this.name = name;
          this.sides = sides;
          this.sideLength = sideLength;
        
      }
      calcPerimeter () {
          return this.sideLength * this.sides;
      };
  }

  const newSquare = new shape('square', 4, 5);
  const newTriangle = new shape ('triangle', 3, 3);

  console.log(newSquare.calcPerimeter())
  console.log(newTriangle.calcPerimeter());

class Square extends shape {
    constructor (Length) {
        super('square', 4, Length);
        this.area = this.sideLength * this.sideLength;
        this.cir = "something"
    }
}
    console.log(square.area)
    // console.log(square.calcArea(10))
    // console.log(square.calcPerimeter())


//////////////////////////////////////////////////////   PLEASE CHECK BELOW     ///////////////////////////////////////////////////
    
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

/*
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

const square = new Square(10);*/

