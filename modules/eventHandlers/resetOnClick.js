import { resetContGroup, startButton } from '../../index.js';
import watch from '../Watch.js';

export default function resetOnClick() {
    watch.reset();
    resetContGroup.classList.add('hidden');
    startButton.classList.remove('hidden');
    document.getElementById('laps').innerHTML = '';
    document.querySelector('aside').classList()
}
