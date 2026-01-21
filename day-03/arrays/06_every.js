const arr = [952, 254, 358, 942, 635]


console.log("every", arr.every((value) => {
    return typeof value == "number"
}))