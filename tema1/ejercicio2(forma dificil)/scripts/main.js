'use strict';
const lista = document.querySelector('.lista');
const dogs = [{
  image: 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg',
  name: 'Dina'
},
{
  image: 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg',
  name: 'Bobby'
},
{
  image: 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg',
  name: 'Lana'
}
];
for (const i of dogs) {
  const objetoContenedor = document.createElement('div');
  objetoContenedor.classList.add('objetoContenedor');
  const img = document.createElement('img');
  img.classList.add('img');
  const objeto = document.createElement('li');
  objeto.classList.add('objeto');
  img.src = i.image;
  const objetoTexto = document.createTextNode(i.name);
  const texto = document.createElement('h2');
  texto.classList.add('texto');
  texto.appendChild(objetoTexto);
  objeto.appendChild(img);
  objetoContenedor.appendChild(objeto);
  objetoContenedor.appendChild(texto);
  lista.appendChild(objetoContenedor);
}
