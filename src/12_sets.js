let items = new Set(['one', 'two', 'three','one', 'two', 'three']);
console.log(items);
console.log('size',items.size);

items.add('four')
console.log('add', items);

items.delete('two')
console.log('delete', items);


console.log('has', items.has('three'));
console.log('has', items.has('two'));

items.forEach(item => console.log(item));
for(let item of items) {
  console.log('for of - ', item);
}

items.clear();
console.log('clear', items);


let tags = new Set(['php', 'js', 'vue']);

console.log('convert to array', [...tags])

console.info('filter', [...tags].filter(tag => tag.length == 3));


console.info('... und zurück in ein Set', new Set([...tags].filter(tag => tag.length == 3)));
