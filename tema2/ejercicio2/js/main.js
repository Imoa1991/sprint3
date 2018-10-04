'use strict';
const adalabers = [
  { name: 'Maria', age: 29, job: 'Diseñadora'},
  { name: 'Lucia', age: 31, job: 'Ingeniera química'},
  { name: 'Susana', age: 34, job: 'Periodista'},
  { name: 'Rocio', age: 25, job: 'Actriz'},
  { name: 'Inmaculada', age: 21, job: 'Diseñadora'}
];
const countAdalabers = list => list.length;
alert(
  countAdalabers(adalabers)
);
const averageAge = list => {
  let ages = 0;
  for (const person of list) {
    ages += person.age;
  }
  return ages/countAdalabers(list);
};
alert(
  averageAge(adalabers)
);
const theYoungest = list => {
  let youngest = null;
  for (const person of list) {
    if (youngest === null || person.age < youngest.age) {
      youngest = person;
    }
  }
  return youngest.name;
};
alert(
  theYoungest(adalabers)
);
const countDesigners =list => {
  let designers = 0;
  for (const person of list) {
    if (person.job === 'Diseñadora') {
      designers++;
    }
  }
  return designers;
};
alert(
  countDesigners(adalabers)
);
