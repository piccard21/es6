// classic
// import  { TaskCollection } from './TaskCollection';

// zwei Module auf 1x importieren
// import  { TaskCollection, foo } from './TaskCollection';

// wenn 'default' in TaskCollection angegeben, dann keine {}
// import   TaskCollection  from './TaskCollection';

// 'default' und foo importieren
import   TaskCollection, {foo}  from './08_ES6_01_TaskCollection';

console.log(foo);

new TaskCollection([
  'Goto',
  'whatever',
  'whoever'
]).dump();
