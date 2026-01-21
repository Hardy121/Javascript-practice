function slowAdd(a, b) {
    console.log("calculating...")
    return a + b;
}
// function memoize(fn) {
//     let previosArgs = []
//     let result;
//     return function (...args) {
//         const context = this
//         const isSame = args.every((element, index) => element == previosArgs[index])
//         if (isSame) {
//             return result
//         }
//         previosArgs = args
//         result = fn.apply(context, args)
//         return result
//     }
// }

function memoize(fn) {
    let chache = {};
    return function (...args) {
        let key = args.join(",")

        if (chache.hasOwnProperty(key)) {
            return chache[key];
        }

        let result = fn.apply(this, args);
        chache[key] = result;
        return result
    }
}
// function memoize(fn) {
//     let cache = new Map();
//     return function (...args) {
//         let key = JSON.stringify(args)

//         if (cache.has(key)) {
//             return cache.get(key)
//         }

//         let result = fn.apply(this, args);
//         cache.set(key, result) 
//         return result
//     }
// }



const cachedAdd = memoize(slowAdd);

cachedAdd(2, 3); // "Calculating..." → 5
cachedAdd(3, 4);
cachedAdd(2, 3); // (no log) → 5