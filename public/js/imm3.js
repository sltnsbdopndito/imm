// Set the countdown time to 1 minute
let countdownTime = 60;

// Function to update the countdown display
function updateCountdown() {
    // Calculate minutes and seconds
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;

    // Add leading zeros if necessary
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the countdown timer
    document.getElementById("countdown").innerText = minutes + ":" + seconds;

    // Decrement the countdown time
    countdownTime--;

    // Stop the countdown when it reaches 0
    if (countdownTime < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerText = "00:00";
    }
}

// Call the updateCountdown function every second
let countdownInterval = setInterval(updateCountdown, 1000);

// Function to check if all verification code inputs are filled
function checkVerificationCode() {
    let inputs = document.querySelectorAll(".verification-code input");
    let filled = true;
    inputs.forEach((input) => {
        if (input.value === "") {
            filled = false;
        }
    });
    return filled;
}

// Function to handle the resend button click
document.querySelector(".btn-resend").addEventListener("click", function () {
    // Implement here the logic to resend the verification code
    // For now, let's just reset the countdown timer to 1 minute
    countdownTime = 60;
    updateCountdown();
});

// Function to update the countdown display
function updateCountdown() {
    // Your existing countdown logic
}

// Function to handle the input change event
document.querySelectorAll(".verification-code input").forEach((input) => {
    input.addEventListener("input", function () {
        if (checkVerificationCode()) {
            alert("Verifikasi berhasil!");
            // Implement here the redirection to the new page
            window.location.href = "imm4";
        }
    });
});

document.querySelector(".btn-resend").addEventListener("click", function () {
    // Implement here the logic to resend the verification code
    // For now, let's just show a notification
    alert("Kode OTP berhasil dikirim ke email Anda!");
});
