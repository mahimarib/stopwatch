import continueOnClick from './modules/eventHandlers/continueOnClick.js';
import lapOnClick from './modules/eventHandlers/lapOnClick.js';
import pauseOnClick from './modules/eventHandlers/pauseOnClick.js';
import resetOnClick from './modules/eventHandlers/resetOnClick.js';
import startOnClick from './modules/eventHandlers/startOnClick.js';

export const timeText = document.getElementById('time-text');
export const startButton = document.getElementById('start-button');
export const lapPauseGroup = document.getElementById('lap-pause');
export const resetContGroup = document.getElementById('reset-cont');

startButton.addEventListener('click', startOnClick);

lapPauseGroup
    .querySelector('.right-button')
    .addEventListener('click', pauseOnClick);

lapPauseGroup
    .querySelector('.left-button')
    .addEventListener('click', lapOnClick);

resetContGroup
    .querySelector('.right-button')
    .addEventListener('click', continueOnClick);

resetContGroup
    .querySelector('.left-button')
    .addEventListener('click', resetOnClick);
