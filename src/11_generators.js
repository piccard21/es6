function *numbers() {

  console.log("begin");

  yield 1;
  yield 2;
  yield 3;
}

let iterator = numbers();
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next());






function *range(start, end) {
    while(start <= end) {
      yield start;
      start++;
    }
}

let iterator2 = range(1,5);

// of versteht Iteratoren
for (let i of iterator2) {
  console.log(i);
}

// oder mit rest
console.log([...range(1,5)]);
