'use strict';
const adalabers = [
  { name: 'Maria', age: 29, job: 'Diseñadora'},
  { name: 'Lucia', age: 31, job: 'Ingeniera química'},
  { name: 'Susana', age: 34, job: 'Periodista'},
  { name: 'Rocio', age: 25, job: 'Actriz'},
  { name: 'Inmaculada', age: 21, job: 'Diseñadora'}
];
alert(
  countAdalabers(adalabers)
);
alert(
  averageAge(adalabers)
);
alert(
  theYoungest(adalabers)
);
alert(
  countDesigners(adalabers)
);
function countAdalabers(list) {
  return list.length;
};
function averageAge(list) {
  let ages = 0;
  for (const person of list) {
    ages += person.age;
  }
  return ages/countAdalabers(list);
};
function theYoungest(list) {
  let youngest = null;
  for (const person of list) {
    if (youngest === null || person.age < youngest.age) {
      youngest = person;
    }
  }
  return youngest.name;
};
function countDesigners(list) {
  let designers = 0;
  for (const person of list) {
    if (person.job === 'Diseñadora') {
        designers++;
    }
  }
  return designers;
}
