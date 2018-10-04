'use strict';
const saludo = document.querySelector('.saludo');
let ask = prompt('¿Cual es tu nombre?');
saludo.innerHTML = `Hola, ${ask}, encantado de conocerte`;
