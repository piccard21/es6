function getPerson() {
  let name = 'John';
  let age = 25;

  return {
    name: name,
    age: age,
    greet: function() {
      return 'Hello ' + this.name;
    }
  }
}

// wie extract() in PHP
function getPersonES6() {
  let name = 'John';
  let age = 25;

  return {
    name,
    age,
    greet() {
      return `Hello ${this.name}`;
    }
  };
}


console.log(getPerson());
console.log(getPerson().greet());



console.log(getPersonES6());
console.log(getPersonES6().greet());




// Object- Destructuring
let person = {
  name: 'Karen',
  age: 32,
  results: ['foo', 'bar']
}

let {
  name,
  age,
  results
} = person;

console.info(name);
console.info(age);
console.info(results);




function getData(data) {
  var results = data.results;
  var age = data.age;

  console.log(results, age);
}

getData(person);




function getDataES6({
  results,
  age
}) {
  console.log(results, age);
}

getDataES6(person);
