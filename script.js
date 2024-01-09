document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.querySelector('main');

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000);

    const playButton = document.getElementById('playButton');
    const audioElement = new Audio('happy_birthday_song.mp3');

    playButton.addEventListener('click', function () {
        audioElement.play();
    });

    setTimeout(() => {
        generateConfetti();
    }, 2000);

    startCountdown();
});

function generateConfetti() {
    const confettiContainer = document.getElementById('confetti');

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confettiContainer.appendChild(confetti);
    }
}

function startCountdown() {
    const birthdayDate = new Date('2024-01-13T12:00:15');
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = birthdayDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            generateConfettiWithMessage();
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    updateCountdown();
}

function generateConfettiWithMessage() {
    const confettiContainer = document.getElementById('confetti');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 45}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confettiContainer.appendChild(confetti);
    }

    const birthdayMessage = document.getElementById('birthdayMessage');
    birthdayMessage.innerHTML = 'Happy Birthday, my Miamore! 🎉🎂';
    birthdayMessage.classList.remove('hidden');
}

function toggleBirthdayMessage() {
    const birthdayMessage = document.getElementById('birthdayMessage');
    birthdayMessage.classList.toggle('hidden');
}

function popBalloon(balloon) {
    balloon.style.opacity = '0';
    setTimeout(() => {
        balloon.remove();
    }, 1000);
}