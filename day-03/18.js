function trafficLight() {
    let initialState = "green"
    let currentState = initialState;
    let signals = ['red', 'green', 'yello']
    function next() {
        const isLast = signals[signals.length - 1]
        const currIndex = signals.indexOf(currentState);

        if (isLast == currentState) {
            currentState = initialState
        } else {
            currentState = signals.at(currIndex + 1)
        }

        return currentState
    }
    return { next }
}

const light = trafficLight(); 