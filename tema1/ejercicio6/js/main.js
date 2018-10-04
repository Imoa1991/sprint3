'use strict';
const users = [
  {name: 'Nymphadora Tonks', time: 9},
  {name: 'Cedric Diggory', time: 28},
  {name: 'Cho Chang', time: 35},
  {name: 'Luna Lovegood', time: 45},
  {name: 'Gregory Goyle', time: 56}
];
podium (users);
podiumAndName (users);

function podium(list) {
  const [primero, segundo, tercero] = list;
  console.log (`el podium lo hacen ${primero.time}, ${segundo.time} y ${tercero.time}`);
}
function podiumAndName(list) {
  const [{name: primero, time: primeroTime}, {name: segundo, time: segundoTime}, {name: tercero, time: terceroTime}] = list;
  console.log (`el podium lo hacen ${primero}, ${segundo} y ${tercero} con tiempos respectivos de ${primeroTime}, ${segundoTime} y ${terceroTime}`);
}
