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

    const gameLinks = document.querySelectorAll('#game-container a');
    gameLinks.forEach((link) => {
        link.addEventListener('click', () => {
