function Timer() {
    let intervalID;
    let t1;
    let elapsedTime = 0;
    let minutes;
    let seconds;

    this.getMinutes = () => minutes;
    this.getSeconds = () => seconds;
    this.getElapsed = () => elapsedTime;

    this.start = () => {
        t1 = Date.now();
        intervalID = setInterval(updateTimer, 10);
    };

    this.stop = () => clearInterval(intervalID);

    this.reset = () => {
        elapsedTime = 0;
        minutes = 0;
        seconds = 0;
    };

    this.toString = () =>
        `${minutes.toString().padStart(2, 0)}:${seconds
            .toFixed(2)
            .padStart(5, '0')}`;

    const updateTimer = () => {
        let t2 = Date.now();
        elapsedTime += t2 - t1;
        seconds = (elapsedTime / 1000.0) % 60;
        minutes = Math.floor(elapsedTime / (1000.0 * 60.0));
        t1 = t2;
    };
}

export default Timer;
