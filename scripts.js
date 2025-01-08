const heartsContainer = document.querySelector('.hearts');
const colors = ['#fff', '#ffd1dc', '#ff6f91', '#fcb045'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

function revealMessage() {
    document.querySelector('.surprise-box').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}
