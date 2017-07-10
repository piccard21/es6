// STRINGS

let title = "Red Rising";
// normal
if (title.indexOf('R') == 0) {
  console.log("R is 1st character");
}
if (title.indexOf('Blue') == -1) {
  console.log("Blue not included");
}

// ES6
if (!title.includes('Blue')) {
  console.log("Blue not included");
}
if (title.startsWith('Red')) {
  console.log("Red is beginning");
}
if (title.startsWith('i', 5)) {
  console.log("i is 5th character");
}
if (title.endsWith('ing')) {
  console.log("ends with ing");
}
// total-length -i
if (title.endsWith('i', 6)) {
  console.log("i is 6th last");
}

console.log(title.repeat(50));
let str = "===";
console.log(`${str.repeat(10)} ${title}  ${str.repeat(10)} `);


// ARRAYS
console.log([5, 6, 7, 8, 9].indexOf(6) > -1);

// ES6
if ([5, 6, 7, 8, 9].includes(8)) {
  console.log("8 included");
}

// find first value
console.log([5, 6, 7, 8, 9].find(function(item) {
  return item === 8;
}));
console.log([5, 6, 7, 8, 9].find(function(item) {
  return item > 6;
}));
console.log([2, 4, 5, 6, 7, 8, 9].find(function(item) {
  return item % 2;
}));
console.log([2, 4, 5, 6, 7, 8, 9].find(item => item % 2));


class User {
  constructor(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
  }
}

let users = [
  new User('Hans', false),
  new User('Klaus', true),
  new User('Knut', false),
]

console.log(users.find(user => user.isAdmin).name)


// findIndex
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].findIndex(item => item > 5));
