'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var items = new Set(['one', 'two', 'three', 'one', 'two', 'three']);
console.log(items);
console.log('size', items.size);

items.add('four');
console.log('add', items);

items.delete('two');
console.log('delete', items);

console.log('has', items.has('three'));
console.log('has', items.has('two'));

items.forEach(function (item) {
  return console.log(item);
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log('for of - ', item);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

items.clear();
console.log('clear', items);

var tags = new Set(['php', 'js', 'vue']);

console.log('convert to array', [].concat(_toConsumableArray(tags)));

console.info('filter', [].concat(_toConsumableArray(tags)).filter(function (tag) {
  return tag.length == 3;
}));

console.info('... und zurück in ein Set', new Set([].concat(_toConsumableArray(tags)).filter(function (tag) {
  return tag.length == 3;
})));