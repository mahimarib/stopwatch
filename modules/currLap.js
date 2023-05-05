import convertElapsedTime from './convertElapsedTime.js';

function CurrLap() {
    const currLap = document.getElementById('current-lap');

    this.updateLapNum = num =>
        (currLap.querySelector('.lap-number').textContent = `Lap ${num}`);

    this.updateElapsed = time =>
        (currLap.querySelector('.elapsed').textContent =
            convertElapsedTime(time));

    this.updateLap = time =>
        (currLap.querySelector('.lap-time').textContent =
            convertElapsedTime(time));
}

const currentLap = new CurrLap();

export default currentLap;
