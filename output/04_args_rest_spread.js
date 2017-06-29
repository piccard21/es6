'use strict';

function sum() {
  console.info(arguments);
}

sum(1, 2, 3, 4);

// rest
function sum_rest() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  // [1,2,3,4]
  console.info(numbers);
}

sum_rest(1, 2, 3, 4);

function sum_rest_andere_params_am_anfang(nicht_der_rest) {
  console.info(nicht_der_rest);

  for (var _len2 = arguments.length, numbers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    numbers[_key2 - 1] = arguments[_key2];
  }

  console.info(numbers);
}

sum_rest_andere_params_am_anfang('whatever', 1, 2, 3, 4);

//spread
// nimmt dass array und macht single args draus (1,2,3,4)
var nums = [1, 2, 3, 4];
sum.apply(undefined, nums);