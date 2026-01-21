const log = (msg) => console.log(msg);

// function throttle(fn, delay) {
//     let lastCall = 0;
//     return function (...args) {
//         const now = Date.now()
//         if (now - lastCall >= delay) {
//             fn.apply(this, args)
//             lastCall = Date.now()
//         }
//     }
// }

function throttle(fn, delay) {
    let isBlocked = false;
    return function (...args) {
        if (!isBlocked) {
            fn.apply(this, args)
            isBlocked = true;
        }
        setTimeout(() => {
            isBlocked = false
        }, delay);
    }
}



const throttledLog = throttle(log, 1000);

throttledLog("A"); // executes immediately
throttledLog("B"); // ignored
throttledLog("C"); // ignored 

throttledLog("D")
    ; // executes
