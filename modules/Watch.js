import DialHand from './DialHand.js';
import Timer from './Timer.js';
import timerText from './TimerText.js';
import createLapsDial from './createLapsDial.js';

function StopWatch() {
    const mainTimer = new Timer();
    const lapsTimer = new Timer();
    let laps = [];
    let lapsHand;
    let intervalID;
    let lapsIntervalID;
    let lapsDial;

    const dialHand = new DialHand(document.getElementById('dial-hand'));

    this.startTimer = () => {
        dialHand.clearTransition();
        mainTimer.start();
        intervalID = setInterval(this.updateTimer, 10);
    };

    this.continue = () => {
        mainTimer.start();
        intervalID = setInterval(this.updateTimer, 10);
        if (lapsHand) {
            lapsTimer.start();
        }
    };

    this.stop = () => {
        mainTimer.stop();
        lapsTimer.stop();
        clearInterval(intervalID);
    };

    this.lap = () => {
        if (!laps.length) {
            lapsTimer.start();
            createLapsDial();
            lapsHand = document.getElementById('laps-hand');
            lapsDial = new DialHand(lapsHand);
            lapsIntervalID = setInterval(() =>
                lapsDial.rotateToSeconds(lapsTimer.getSeconds())
            );
            laps.push(mainTimer.getElapsed());
        } else {
            laps.push(lapsTimer.getElapsed());
            lapsTimer.reset();
        }
    };

    this.reset = () => {
        timerText.resetText();
        dialHand.resetTransition();
        mainTimer.reset();
        lapsTimer.reset();
        if (lapsHand) {
            lapsDial.reset();
            lapsHand.remove();
        }
        lapsHand = null;
        laps = [];
    };

    this.updateTimer = () => {
        timerText.updateText(mainTimer.toString());
        dialHand.rotateToSeconds(mainTimer.getSeconds());
    };
}

const watch = new StopWatch();

export default watch;
