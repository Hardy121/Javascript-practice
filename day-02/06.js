let result = {}
function flattenObjArr(object, prefix) {
    for (const key in object) {
        if (!Object.hasOwn(object, key)) continue;
        const element = object[key];

        console.log("key=", key, "element=", element, typeof element)
        let currentPath = prefix ? prefix + "." + key : key

        if (typeof element == "object" && element != null) {
            flattenObjArr(element, currentPath);
        } else {
            result[currentPath] = element
        }
    }
}
flattenObjArr({ a: [1, 2], b: { c: [3] } }, "")
console.log("🚀 ~ result:", result);