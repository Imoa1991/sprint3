'use strict';

const body = document.querySelector('body');

class Square {

  perimeter(side) {
    let perimeter = side * 4;
    return perimeter;
  }

  //  perimeter = side => return side * 4; Está bien como ES6 pero el navegador es más tonto que nosotras

  area(side) {
    let area = side * side;
    return area;

  }


}

const cuadrado = new Square();


body.innerHTML += `
<p>Perimetro: ${cuadrado.perimeter(9)}</p>
<p>Area: ${cuadrado.area(9)}</p>
`
