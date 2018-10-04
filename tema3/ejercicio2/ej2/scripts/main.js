'use strict';

const body = document.querySelector('body');

class Square {

  constructor(longitud) {
    this.side = longitud;
  }

  perimeter() {
    return this.side * 4;
  }

  area() {
    return this.side * this.side;
  }

}

const cuadrado = new Square(9);


body.innerHTML += `
<p>Perimetro: ${cuadrado.perimeter()}</p>
<p>Area: ${cuadrado.area()}</p>
`
