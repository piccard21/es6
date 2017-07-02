'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function User(username, email) {
  this.username = username;
  this.email = email;

  // schlecht: wird für jede Instanz immer wieder deklariert & instanziiert, darum prototype
  // this.changeEmail = function() 8
}

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

var user = new User('piccard', 'whatever@there.de');
console.log(user.email);
user.changeEmail('whoever@there.de');
console.log(user.email);

var UserES6 = function () {
  function UserES6(username, email) {
    _classCallCheck(this, UserES6);

    this.username = username;
    this.email = email;
  }

  _createClass(UserES6, [{
    key: 'changeEmail',
    value: function changeEmail(newEmail) {
      this.email = newEmail;
    }
  }, {
    key: 'foo',
    get: function get() {
      return this._foo.toUpperCase();
    },
    set: function set(foo) {
      if (foo) {
        this._foo = foo;
      }
    }
  }], [{
    key: 'register',
    value: function register(username, email) {
      return new UserES6(username, email);
    }
  }, {
    key: 'registerWithRest',
    value: function registerWithRest() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(UserES6, [null].concat(args)))();
    }
  }]);

  return UserES6;
}();

var userES6 = new UserES6('piccard', 'whatever@there.de');
console.dir(userES6);
console.log(userES6.email);
user.changeEmail('whoever@there.de');
console.log(userES6.email);

var staticExample = UserES6.register('staticOne', 'staticOne@whatever.de');
console.dir(staticExample);

var staticExampleWithRest = UserES6.registerWithRest('staticOne', 'staticOne@whatever.de');
console.dir(staticExampleWithRest);

// setter example
staticExampleWithRest.foo = 'value via setter';
// getter example
console.info(staticExampleWithRest.foo);

// classes als parameter
function log(strategy) {
  strategy.handle();
}

log(new (function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'handle',
    value: function handle() {
      console.info('class als parameter');
    }
  }]);

  return _class;
}())());