//create variables

var hint = document.getElementById("hint");

// var currentWord = document.getElementById("current-word");

var guessedLetters = document.getElementById("guessed-letters");

var remainingGuesses = document.getElementById("remaining-guesses");

var wins = document.getElementById("wins");

var losses = document.getElementById("losses");

//create an array that includes all Hangman Words(Star Trek Episodes)
var episodeList = ["arena", "balance of terror", "space seed", "the city on the edge of forever", "mirror mirror", "doomsday machine", "spocks brain", "spectre of the gun", "the trouble with tribbles", "return of the archons"]

var randomEpisode = episodeList[Math.floor(Math.random() * episodeList.length)];


// var blankAnswer = randomEpisode.replace(/a-z/g, "-");




console.log(randomEpisode);
//have the computer randomly choose a random "Word"
    //have the computer replace the letters with "-"

//create an event listener
    








