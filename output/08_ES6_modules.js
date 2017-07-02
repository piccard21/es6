'use strict';

var _ES6_01_TaskCollection = require('./08_ES6_01_TaskCollection');

var _ES6_01_TaskCollection2 = _interopRequireDefault(_ES6_01_TaskCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_ES6_01_TaskCollection.foo); // classic
// import  { TaskCollection } from './TaskCollection';

// zwei Module auf 1x importieren
// import  { TaskCollection, foo } from './TaskCollection';

// wenn 'default' in TaskCollection angegeben, dann keine {}
// import   TaskCollection  from './TaskCollection';

// 'default' und foo importieren


new _ES6_01_TaskCollection2.default(['Goto', 'whatever', 'whoever']).dump();