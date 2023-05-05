import { lapPauseGroup, resetContGroup } from '../../index.js';
import watch from '../StopWatch.js';

export default function pauseOnClick() {
    watch.stop();
    lapPauseGroup.classList.add('hidden');
    resetContGroup.classList.remove('hidden');
}
