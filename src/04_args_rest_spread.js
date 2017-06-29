function sum() {
  console.info(arguments);
}


sum(1, 2, 3, 4);



// rest
function sum_rest(...numbers) {
  // [1,2,3,4]
  console.info(numbers);
}

sum_rest(1, 2, 3, 4);

function sum_rest_andere_params_am_anfang(nicht_der_rest, ...numbers) {
  console.info(nicht_der_rest);
  console.info(numbers);
}

sum_rest_andere_params_am_anfang('whatever', 1, 2, 3, 4);


//spread
// nimmt dass array und macht single args draus (1,2,3,4)
let nums = [1, 2, 3, 4]
sum(...nums);
