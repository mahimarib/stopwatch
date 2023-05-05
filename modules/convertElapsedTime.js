export default function convertElapsedTime(elapsedTime) {
    const seconds = (elapsedTime / 1000.0) % 60;
    const minutes = Math.floor(elapsedTime / (1000.0 * 60.0));
    return `${minutes.toString().padStart(2, 0)}:${seconds
        .toFixed(2)
        .padStart(5, '0')}`;
}
