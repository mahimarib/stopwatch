import { lapPauseGroup, startButton } from '../../index.js';
import watch from '../Watch.js';

export default function startOnClick() {
    watch.startTimer();
    startButton.classList.add('hidden');
    lapPauseGroup.classList.remove('hidden');
}
