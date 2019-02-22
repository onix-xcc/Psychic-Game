//Array of letters
var letterChoicesComputer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Keeping scores and tracking guesses
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessesSoFar = [];
var computerSelection = undefined;

//Show remaining guesses on the html on "Remaining Guesses:" part
var newGuessesLeft = function() {
    document.querySelector("#guessesLeft").innerHTML = "Remaining Guesses: " + guessesLeft;
}

//Show all pressed guesses next to Guesses So Far <p>
var newGuessedLetters = function() {
    document.querySelector("#guessesSoFar").innerHTML= "Guesses So Far: " + guessesSoFar.join(", ");
};

//Computer's randomly generates and logs letter from array
var newComputerSelection = function() {
    computerSelection = letterChoicesComputer[Math.floor(Math.random() * letterChoicesComputer.length)];
    console.log(computerSelection);
};

//Resetting values after game is concluded
var reset = function() {
    guessesLeft = 9;
    guessesSoFar= [];

    newComputerSelection();
    newGuessesLeft();
    newGuessedLetters();
}

//Game

//  Reduces by 1 the guesses left when a wrong guess is made by the player.
document.onkeyup = function(event) {
    guessesLeft--;
    console.log(event.key);
    console.log(guessesSoFar);

//Whichever guess input is done by the player won't be case sensitive 
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

//push the guessed letter to userGuess, update var functions.
    guessesSoFar.push(playerGuess);
    newGuessesLeft();
    newGuessedLetters();

//Players win when they match the computerSelection and have guessesLeft, lose if they run out of guesses.
    if (guessesLeft > 0) {
        if (playerGuess == computerSelection) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("You have gazed into the crystal ball and proved yourself a true seer!");
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("You lack the all-seeing eye, try again if you must!");

        reset();
    }
};

