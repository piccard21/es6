'use strict';

function getPerson() {
  var name = 'John';
  var age = 25;

  return {
    name: name,
    age: age,
    greet: function greet() {
      return 'Hello ' + this.name;
    }
  };
}

function getPersonES6() {
  var name = 'John';
  var age = 25;

  return {
    name: name,
    age: age,
    greet: function greet() {
      return 'Hello ' + this.name;
    }
  };
}

console.log(getPerson());
console.log(getPerson().greet());

console.log(getPersonES6());
console.log(getPersonES6().greet());

// Object- Destructuring
var person = {
  name: 'Karen',
  age: 32,
  results: ['foo', 'bar']
};

var name = person.name,
    age = person.age,
    results = person.results;


console.info(name);
console.info(age);
console.info(results);

function getData(data) {
  var results = data.results;
  var age = data.age;

  console.log(results, age);
}

getData(person);

function getDataES6(_ref) {
  var results = _ref.results,
      age = _ref.age;

  console.log(results, age);
}

getDataES6(person);