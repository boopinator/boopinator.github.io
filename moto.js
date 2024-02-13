document.addEventListener('DOMContentLoaded', () => {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameFrame = document.getElementById('game-frame');

    fullscreenBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            fullscreenBtn.textContent = 'Fullscreen';
        } else {
            gameFrame.requestFullscreen();
            fullscreenBtn.textContent = 'Exit Fullscreen';
        }
    });

    const gameButtons = document.querySelectorAll('#game-container
