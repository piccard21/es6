"use strict";

var timer = function timer(length) {
  return new Promise(function (resolve, reject) {
    console.log("Init Promise");

    setTimeout(function () {
      console.log("Timeout done");
      resolve();
    }, length);
  });
};

timer(2000).then(function () {
  return console.log("timer has concluded");
});