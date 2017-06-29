'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskCollection = function () {
  function TaskCollection() {
    var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, TaskCollection);

    this.tasks = tasks;
  }

  _createClass(TaskCollection, [{
    key: 'log',
    value: function log() {
      // this.tasks.forEach(function(task) {
      //
      // () bei mehreren argumenten task, arg2, arg3
      this.tasks.forEach(function (task) {
        console.info(task);
      });
      //
      // nur ein argument
      // bei single-line ist return immer implizit, ich muss es also nicht schreiben
      //  return task.toGulp()
      this.tasks.forEach(function (task) {
        return task.toGulp();
      });
      //
      // kein argument
      this.tasks.forEach(function () {
        return console.info('hello');
      });
    }

    //
    // wenn mehr zu machen ist

  }, {
    key: 'prepare',
    value: function prepare() {
      // this ist hier bei der Arrow-Syntax
      // ... wenn ich function unten benutzen dann nicht!!!!
      this.tasks.forEach(function (task) {
        task.toGulp();
        console.log('this verweist immer auf den blocklevel von drüber hier bei der Arrow-Syntax');
      });
    }
  }]);

  return TaskCollection;
}();

var Task = function () {
  function Task() {
    _classCallCheck(this, Task);
  }

  _createClass(Task, [{
    key: 'toGulp',
    value: function toGulp() {
      console.log("Converting to gulp ....");
    }
  }]);

  return Task;
}();

new TaskCollection([new Task(), new Task(), new Task()]).log();
new TaskCollection([new Task(), new Task(), new Task()]).prepare();

//single line &template strings
var names = ['hans', 'wurst'];
names = names.map(function (name) {
  return name + ' is cool';
});
console.info(names);