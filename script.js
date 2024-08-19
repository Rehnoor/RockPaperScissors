let compScore = 0;
let userScore = 0;
let roundNum;

window.onload = function() {
    roundNum = 1;
    document.getElementById('game-screen').style.display = "none";
    document.getElementById('comp-score').textContent = compScore;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('start-btn').addEventListener("click", function() {
        document.getElementById('game-screen').style.display = "block";
        document.getElementById('start-screen').style.display = "none";
    })
    document.getElementById('user-rock').addEventListener("click", function() {
        const compResp = getComputerChoice();
        if (compResp === "rock") {
            document.getElementById('game-status').textContent = "Tie";
            document.getElementById('comp-selection').textContent = "Rock";
        } else if (compResp == "paper") {
            document.getElementById('game-status').textContent = "You lose";
            document.getElementById('comp-selection').textContent = "Paper";
            compScore++;
            document.getElementById('comp-score').textContent = compScore;
        } else {
            document.getElementById('game-status').textContent = "You win!";
            document.getElementById('comp-selection').textContent = "Scissors";
            userScore++;
            document.getElementById('user-score').textContent = userScore;
        }
        roundNum++;
        checkRoundNum();
    })
    document.getElementById('user-paper').addEventListener("click", function() {
        const compResp = getComputerChoice();
        if (compResp === "rock") {
            document.getElementById('game-status').textContent = "You win!";
            document.getElementById('comp-selection').textContent = "Rock";
            userScore++;
            document.getElementById('user-score').textContent = userScore;
        } else if (compResp == "paper") {
            document.getElementById('game-status').textContent = "Tie";
            document.getElementById('comp-selection').textContent = "Paper";
        } else {
            document.getElementById('game-status').textContent = "You lose";
            document.getElementById('comp-selection').textContent = "Scissors";
            compScore++;
            document.getElementById('comp-score').textContent = compScore;
        }
        roundNum++;
        checkRoundNum();
    })
    document.getElementById('user-scissors').addEventListener("click", function() {
        const compResp = getComputerChoice();
        if (compResp === "rock") {
            document.getElementById('game-status').textContent = "You lose";
            document.getElementById('comp-selection').textContent = "Rock";
            compScore++;
            document.getElementById('comp-score').textContent = compScore;
        } else if (compResp == "paper") {
            document.getElementById('game-status').textContent = "You win!";
            document.getElementById('comp-selection').textContent = "Paper";
            userScore++;
            document.getElementById('user-score').textContent = userScore;
        } else {
            document.getElementById('game-status').textContent = "Tie";
            document.getElementById('comp-selection').textContent = "Scissors";
        }
        roundNum++;
        checkRoundNum();
    })
}

function checkRoundNum() {
    if (roundNum === 6) {
        if (compScore > userScore) {
            userResp = alert("In 5 rounds, lost against the computer :(. Reload the page to play again!");
        } else {
            userResp = alert("In 5 rounds, you won against the computer!!! Reload the page to play again!");
        }
        document.getElementById('game-screen').style.display = "none";
        document.getElementById('game-status').textContent = "Please reload to play again";
    }
}

function getComputerChoice() {
    const compSelection = Math.floor(Math.random() * 3); // gets random number 0 (rock), 1 (paper), and 2 (scissors)
    if (compSelection === 0 ) {
        return "rock";
    } else if (compSelection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}