'use strict';
const element = document.querySelector('#element');
const dogs = [
    {
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
for (let i = 0; i < dogs.length; i++) {
    element.innerHTML +=
    `<li class="dog__items">
      <h2 class="dog__name">${dogs[i].name}</h2>
      <img  class="dog__img" src="${dogs[i].image}" alt="${dogs[i].name}">
    </li>`;
}
