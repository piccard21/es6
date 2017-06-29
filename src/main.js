class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  log() {
    // this.tasks.forEach(function(task) {
    //
    // () bei mehreren argumenten task, arg2, arg3
    this.tasks.forEach((task) => {
      console.info(task);
    });
    //
    // nur ein argument
    // bei single-line ist return immer implizit, ich muss es also nicht schreiben
    //  return task.toGulp()
    this.tasks.forEach(task => task.toGulp());
    //
    // kein argument
    this.tasks.forEach(() => console.info('hello'));

  }

  //
  // wenn mehr zu machen ist
  prepare() {
    // this ist hier bei der Arrow-Syntax
    // ... wenn ich function unten benutzen dann nicht!!!!
    this.tasks.forEach(task => {
        task.toGulp();
        console.log('this verweist immer auf den blocklevel von drüber hier bei der Arrow-Syntax')
    });

  }
}

class Task {
  toGulp() {
    console.log("Converting to gulp ....");
  }
}



new TaskCollection([new Task, new Task, new Task]).log();
new TaskCollection([new Task, new Task, new Task]).prepare();



//single line &template strings
let names = ['hans', 'wurst'];
names =names.map(name => `${name} is cool`);
console.info(names);
