const arr = [952, 254, 358, 942, 635]
const array = [{ a: 1, }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5, }, { f: 6 }];


console.log("some", array.some((value) => JSON.stringify(value) == JSON.stringify({ a: 1 })))