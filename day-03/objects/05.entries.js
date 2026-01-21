let object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

console.log(Object.entries(object))
Object.entries(object).forEach(([key, value]) => {
  console.log(key, value);
});
