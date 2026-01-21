const arr = [952, 254, 358, 942, 635]

// const sortedArr = arr.''
console.log("Array.isArray", Array.isArray([1, 2]))

console.log("Array.from", Array.from("1bc"))

console.log("Array.of", Array.of(1, 2, 3))

arr.push(22)
console.log("push", arr)
arr.pop();
console.log("pop", arr)
arr.unshift(0);
console.log("unshift", arr)
arr.shift();
console.log("shift", arr)

arr.splice(1, 2, "a", "b");
console.log("splice", arr)

console.log("slice", arr.slice(1, 3))

console.log("concat", arr.concat([4, 5]))


console.log("toReversed", arr.toReversed())

console.log("toSorted", arr.toSorted((a, b) => a - b))

console.log("with", arr.with(1, 99))

console.log("indexOf", arr.indexOf(942))

console.log("indexOf", arr.lastIndexOf(952))
console.log("indexOf", arr.includes("b"))



console.log("some",arr.every((item, i) => item == 635))

console.log([1,[2,[3]]].flat(2))

console.log([1,[2]].flatMap(x => [x, x*2]))

arr.fill(0);
console.log(arr)