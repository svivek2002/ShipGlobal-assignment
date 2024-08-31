// spaceGameScript.js

let cosmicRandomNumber = Math.floor(Math.random() * 100) + 1;
let galaxyAttemptsRemaining = 5;

document.getElementById("rocket-check-button").addEventListener("click", verifyCosmicGuess);
document.getElementById("orbit-restart-button").addEventListener("click", resetGalaxyGame);

function verifyCosmicGuess() {
    const guessedNumber = document.getElementById("star-input-field").value;
    const feedbackElement = document.getElementById("comet-feedback-text");

    if (guessedNumber === '' || isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        feedbackElement.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    galaxyAttemptsRemaining--;
    const attemptElement = document.getElementById("planet-attempt-tracker");
    attemptElement.textContent = `You have ${galaxyAttemptsRemaining} chances left`;

    if (guessedNumber == cosmicRandomNumber) {
        feedbackElement.textContent = `Correct! You guessed the number in ${5 - galaxyAttemptsRemaining} attempts.`;
        endSpaceAdventure();
    } else if (guessedNumber > cosmicRandomNumber) {
        feedbackElement.textContent = "Your number is high.";
    } else {
        feedbackElement.textContent = "Your number is low.";
    }

    if (galaxyAttemptsRemaining <= 0) {
        feedbackElement.textContent = `Game Over! The number was ${cosmicRandomNumber}.`;
        endSpaceAdventure();
    }
}

function endSpaceAdventure() {
    document.getElementById("rocket-check-button").style.display = "none";
    document.getElementById("orbit-restart-button").style.display = "block";
}

function resetGalaxyGame() {
    cosmicRandomNumber = Math.floor(Math.random() * 100) + 1;
    galaxyAttemptsRemaining = 5;
    document.getElementById("comet-feedback-text").textContent = "";
    document.getElementById("planet-attempt-tracker").textContent = "You have 5 chances";
    document.getElementById("rocket-check-button").style.display = "block";
    document.getElementById("orbit-restart-button").style.display = "none";
    document.getElementById("star-input-field").value = "";
}
