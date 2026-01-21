function taskQueue() {
    let queue = [];

    function addTask(fn) {
        queue.push(fn)
    }

    async function run() {
        while (queue.length) {
            const task = queue.shift()
            await task();
        }
    }

    return { addTask, run }
}

const queue = taskQueue()

queue.addTask(() => {
    console.log("A")
})
queue.addTask(() =>
    new Promise(resolve =>
        setTimeout(() => {
            console.log("B");
            resolve();
        }, 1000)
    )
);

queue.addTask(() => console.log("C"));


queue.run()
 