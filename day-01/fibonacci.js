const number = 6;
function fibonacci(n) {
    let previosNum = 0;
    let sum = 1;
    for (let i = 2; i <= n; i++) {
       sum = previosNum + sum
       previosNum = sum - previosNum
    }
    return sum
}
console.log(fibonacci(number))