export default function createLapsDial() {
    const dialHand = document.getElementById('dial-hand');
    dialHand.insertAdjacentHTML(
        'afterend',
        `
        <g id="laps-hand">
            <g transform="translate(0 -52)">
                <path
                    d="M -2.25 0 h 4.5 l -2.25 2.5 l -2.25 -2.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                ></path>
            </g>
        </g>
        `
    );
}
