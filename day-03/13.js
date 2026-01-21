const log = (msg) => console.log(msg);

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        const context = this
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

const debouncedLog = debounce(log, 500);

debouncedLog("A");
debouncedLog("B");
debouncedLog("C");