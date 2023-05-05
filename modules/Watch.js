import DialHand from './DialHand.js';
import Timer from './Timer.js';
import timerText from './TimerText.js';
import createLap from './createLap.js';
import createLapsDial from './createLapsDial.js';
import initLapsContainer from './initLapsContainer.js';

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
            initLapsContainer();
        } else {
            laps.push(lapsTimer.getElapsed());
            lapsTimer.reset();
        }
        createLap(laps.length, mainTimer.getElapsed(), laps[laps.length - 1]);
    };

    this.reset = () => {
        document
            .querySelector('main .container')
            .classList.remove('side-by-side');
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
