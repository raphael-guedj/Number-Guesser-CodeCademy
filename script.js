let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate secret number
const generateTarget = () => Math.floor(Math.random()*10);

generateTarget();

// Distance absolute
const distanceAbsolute = (x, y) => {
    return Math.abs(x - y);
}

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    let userDiff = distanceAbsolute(userGuess, targetNumber);
    let computerDiff = distanceAbsolute(computerGuess, targetNumber);
    if (userGuess < 0 || userGuess >9 ) {
        alert("The number is out of range, try again");
    }
    else if (userDiff <= computerDiff) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if(winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber ++;
}
