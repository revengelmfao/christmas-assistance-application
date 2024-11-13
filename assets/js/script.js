// Set the date for Christmas (Dec 25, 2024)
const christmasDate = new Date('December 25, 2024 00:00:00').getTime();

// Update countdown every second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = christmasDate - now;

    // Calculate time left in days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML with the calculated values
    document.getElementById("days").innerHTML = `${days} Days`;
    document.getElementById("hours").innerHTML = `${hours} Hours`;
    document.getElementById("minutes").innerHTML = `${minutes} Minutes`;
    document.getElementById("seconds").innerHTML = `${seconds} Seconds`;

    // If the countdown is finished, display "Merry Christmas!"
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-text").innerHTML = "Merry Christmas!";
        document.getElementById("countdown").style.display = "none";
    }
}, 1000);
// END OF THE COUNTDOWN TIMER// DO NOT DELETE//