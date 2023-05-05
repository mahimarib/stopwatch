import { resetContGroup, startButton } from '../../index.js';
import watch from '../stopwatch.js';

export default function resetOnClick() {
    watch.reset();
    resetContGroup.classList.add('hidden');
    startButton.classList.remove('hidden');
}
