function TimerText() {
    const timeText = document.querySelector('#time-text');
    this.updateText = text => (timeText.textContent = text);
    this.resetText = () => (timeText.textContent = '00:00.00');
}

const timerText = new TimerText();

export default timerText;
