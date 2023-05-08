import { resetContGroup, startButton } from '../../index.js';
import watch from '../Watch.js';

export default function resetOnClick() {
    watch.reset();
    resetContGroup.classList.add('hidden');
    startButton.classList.remove('hidden');
    document
        .getElementById('laps')
        .querySelectorAll('.lap-info:not(#current-lap)')
        .forEach(e => e.remove());
}
