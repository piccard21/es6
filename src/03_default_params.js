function applyDiscount(cost, discount) { //100, .10
  discount =discount || .10;
  console.info(cost - (cost*discount));
}
function applyDiscountEs6(cost, discount=.10) {
  console.info(cost - (cost*discount));
}


function getDiscount() {
  return .10;
}
function applyDiscountEs6_2(cost, discount=getDiscount()) {
  console.info(cost - (cost*discount));
}


applyDiscount(100);
applyDiscountEs6(100);
applyDiscountEs6_2(100);
