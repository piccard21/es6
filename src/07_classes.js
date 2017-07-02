function User(username, email) {
  this.username = username;
  this.email = email;

  // schlecht: wird für jede Instanz immer wieder deklariert & instanziiert, darum prototype
  // this.changeEmail = function() 8
}

User.prototype.changeEmail = function(newEmail) {
  this.email = newEmail;
};

var user = new User('piccard', 'whatever@there.de');
console.log(user.email);
user.changeEmail('whoever@there.de');
console.log(user.email);



class UserES6 {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static register(username, email) {
    return new UserES6(username, email);
  }

  static registerWithRest(...args) {
    return new UserES6(...args);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }

  get foo() {
      return this._foo.toUpperCase();
  }

  set foo(foo){
      if(foo){
          this._foo = foo;
      }
  }
}

let userES6 = new UserES6('piccard', 'whatever@there.de');
console.dir(userES6);
console.log(userES6.email);
user.changeEmail('whoever@there.de');
console.log(userES6.email);


let staticExample = UserES6.register('staticOne', 'staticOne@whatever.de');
console.dir(staticExample);


let staticExampleWithRest = UserES6.registerWithRest('staticOne', 'staticOne@whatever.de');
console.dir(staticExampleWithRest);

// setter example
staticExampleWithRest.foo = 'value via setter';
// getter example
console.info(staticExampleWithRest.foo);


// classes als parameter
function log(strategy) {
  strategy.handle();
}

log(new class {
  handle() {
    console.info('class als parameter');
  }
})
