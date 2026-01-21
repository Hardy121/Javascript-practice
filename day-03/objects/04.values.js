let object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
console.log(Object.values(object))
Object.values(object).forEach(value => {
  console.log(value);
});
