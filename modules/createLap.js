import convertElapsedTime from './convertElapsedTime.js';

const lapsList = document.getElementById('current-lap');

export default function createLap(lapNum, elapsedTime, lapTime) {
    lapsList.insertAdjacentHTML(
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
