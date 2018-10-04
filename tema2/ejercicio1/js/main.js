'use strict';
const users = [
  {name: 'Nymphadora Tonks', time: 9},
  {name: 'Cedric Diggory', time: 28},
  {name: 'Cho Chang', time: 35},
  {name: 'Luna Lovegood', time: 45},
  {name: 'Gregory Goyle', time: 56}
];
const newUser = [...users,{name: 'Argus Filch', time: 78}];
console.log(newUser);
const [person] = newUser;
console.log(person);
const winPerson = {...person, win: 1};
console.log(winPerson);
//forma way de hacer lo mismo
const win = winUser => {
  let winTime = null;
  for (const person of winUser){
    if (winTime === null || person.time < winTime.time) {
      winTime = person;
    }
  }
console.log(winTime.name);
};
win(users);
