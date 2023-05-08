import convertElapsedTime from './convertElapsedTime.js';

const lap = document.querySelector('#laps li:first-of-type');

export default function createLap(lapNum, elapsedTime, lapTime) {
    lap.insertAdjacentHTML(
        'afterend',
        `
        <li>
            <div class="lap-info">
                <p class="lap-number">Lap ${lapNum}</p>
                <p class="elapsed">${convertElapsedTime(elapsedTime)}</p>
                <p class="lap-time">${convertElapsedTime(lapTime)}</p>
            </div>
        </li>
        `
    );
}
