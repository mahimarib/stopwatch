function DialHand(element) {
    const setAngle = angle => (element.style.transform = `rotate(${angle}deg)`);

    this.rotateToSeconds = seconds => {
        setAngle(seconds * 6);
    };

    this.clearTransition = () => (element.style.transition = 'none');

    this.resetTransition = () => {
        element.style.transition = 'transform 1s ease';
        setAngle(0);
    };

    this.reset = () => {
        setAngle(0);
    };
}

export default DialHand;
