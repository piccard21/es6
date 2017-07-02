// export class TaskCollection {
export default class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  dump() {
    console.log(this.tasks);
  }
}


export let foo = 'bar';
export let myfunc = function() {};


// Klasse kann auch einfach so geschreieben werden und man exportiert später
// class TaskCollection {  ... }
// export default TaskCollection
