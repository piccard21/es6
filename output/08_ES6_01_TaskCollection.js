'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// export class TaskCollection {
var TaskCollection = function () {
  function TaskCollection() {
    var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, TaskCollection);

    this.tasks = tasks;
  }

  _createClass(TaskCollection, [{
    key: 'dump',
    value: function dump() {
      console.log(this.tasks);
    }
  }]);

  return TaskCollection;
}();

exports.default = TaskCollection;
var foo = exports.foo = 'bar';
var myfunc = exports.myfunc = function myfunc() {};

// Klasse kann auch einfach so geschreieben werden und man exportiert später
// class TaskCollection {  ... }
// export default TaskCollection