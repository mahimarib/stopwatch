import { lapPauseGroup, resetContGroup } from '../../index.js';
import watch from '../Watch.js';

export default function continueOnClick() {
    watch.continue();
    resetContGroup.classList.add('hidden');
    lapPauseGroup.classList.remove('hidden');
}
