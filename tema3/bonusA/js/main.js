'use strict';

class Polygon {
  constructor(sides, baseLong, heightLong) {
    this.numberOfSides = sides;
    this.base = baseLong;
    this.height = heightLong;
  }
  perimeter(){
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(sides) {
    super(4, sides, sides);
  }
  numbers(){
    return this.numberOfSides;
  }
}

class Triangle extends Polygon {
  constructor(baseTriangle, heightTriangle) {
    super(3, baseTriangle, heightTriangle);
  }
  area() {
    return super.area()/2;
  }
  numbers(){
    return this.numberOfSides;
  }
}

const cuadrado = new Square(40);
console.log(cuadrado.numberOfSides);
console.log(cuadrado.area());
console.log(cuadrado.perimeter());

const triangulo = new Triangle(40, 30);
console.log(triangulo.numberOfSides);
console.log(triangulo.area());
console.log(triangulo.perimeter());
