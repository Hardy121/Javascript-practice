const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};

function recursive(object, prefix, result) {
    for (const key in object) {
        if (!Object.hasOwn(object, key)) continue;

        const element = object[key];
        let newPrefix = prefix ? prefix + "." + key : key
        if (typeof element == "object") {
            recursive(element, newPrefix, result)
        } else {
            result[newPrefix] = element
        }
    }
    return result
}

console.log(recursive(obj, "", {}))