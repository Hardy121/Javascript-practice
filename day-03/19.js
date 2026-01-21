function createCounter() {
    let count = 0;

    function increment() {
        return count += 1
    }

    function getCount() {
        return count
    }

    function reset() {
        return count = 0
    }
    return { increment, getCount, reset }
} 