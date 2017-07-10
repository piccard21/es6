"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// STRINGS

var title = "Red Rising";
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
var str = "===";
console.log(str.repeat(10) + " " + title + "  " + str.repeat(10) + " ");

// ARRAYS
console.log([5, 6, 7, 8, 9].indexOf(6) > -1);

// ES6
if ([5, 6, 7, 8, 9].includes(8)) {
  console.log("8 included");
}

// find first value
console.log([5, 6, 7, 8, 9].find(function (item) {
  return item === 8;
}));
console.log([5, 6, 7, 8, 9].find(function (item) {
  return item > 6;
}));
console.log([2, 4, 5, 6, 7, 8, 9].find(function (item) {
  return item % 2;
}));
console.log([2, 4, 5, 6, 7, 8, 9].find(function (item) {
  return item % 2;
}));

var User = function User(name, isAdmin) {
  _classCallCheck(this, User);

  this.name = name;
  this.isAdmin = isAdmin;
};

var users = [new User('Hans', false), new User('Klaus', true), new User('Knut', false)];

console.log(users.find(function (user) {
  return user.isAdmin;
}).name);

// findIndex
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].findIndex(function (item) {
  return item > 5;
}));