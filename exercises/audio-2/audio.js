(() => {
    const audioContext = new AudioContext();
    const canvas = document.getElementById('graph');
    const drawContext = canvas.getContext('2d');
    drawContext.beginPath();
    drawContext.moveTo(0, 300);

    window.drawLine = (x, y) => {
        drawContext.lineTo(x, y);
        drawContext.stroke();
    };

    window.makeSound = (hz, ms) => {
        const audio = audioContext.createOscillator();
        audio.frequency.value = hz;
        audio.connect(audioContext.destination);
        audio.start();
        audio.stop(audioContext.currentTime + ms / 1000);
    };
})();
