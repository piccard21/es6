"use strict";

function applyDiscount(cost, discount) {
  //100, .10
  discount = discount || .10;
  console.info(cost - cost * discount);
}
function applyDiscountEs6(cost) {
  var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .10;

  console.info(cost - cost * discount);
}

function getDiscount() {
  return .10;
}
function applyDiscountEs6_2(cost) {
  var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDiscount();

  console.info(cost - cost * discount);
}

applyDiscount(100);
applyDiscountEs6(100);
applyDiscountEs6_2(100);