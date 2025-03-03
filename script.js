// Set the countdown target date
const targetDate = new Date("May 15, 2025 12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "Tournament Started!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
// filepath: /D:/VS code/underdogesport-main/script.js
document.addEventListener("DOMContentLoaded", function() {
    const text = "Launching Soon";
    let index = 0;
    const speed = 150; // Adjust typing speed
    const delay = 2000; // Delay before restarting

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                document.getElementById("typewriter").innerHTML = "";
                index = 0;
                typeWriter();
            }, delay);
        }
    }

    typeWriter();
});