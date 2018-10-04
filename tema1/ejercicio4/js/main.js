'use strict';
const films = document.querySelector('.pelis');
const asks = [
'¿Cual es tu peli favorita?',
'¿Tu segunda peli favorita?'
];
let favoriteFilms = [];
for (const answer of asks) { //answer = asks[i]
  let filmAnswer = prompt(answer);
  favoriteFilms.push(filmAnswer);
};
for (const text of favoriteFilms) {
  const yourFilm = document.createElement('li');
  const textFilm = document.createTextNode(`¡A mí también me encantó ${text}! Tenemos mucho en común, humano.`);
  yourFilm.classList.add('yourFilm');
  yourFilm.appendChild(textFilm);
  films.appendChild(yourFilm);
};
