var Letters = require('./letters.js');
var Inquirer = require('inquirer');

let remainingGuesses = 10;
let correctGuess = false;

console.log("You are now playing Hangman" +
	"\nThe category is science!");
console.log("\n----------------------------------------\n");

var randomWordFunct = function(){
	// picks random word
	let randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
	// splits random word into letters
	randomWordSplit = new letters.letterSplit(randomWord);
	// changes letters to _
	randomWordSplit.addPlaceholders();

};

var startGame = function() {
	randomWordFunct();

	// call playerPrompt function
	playerPrompt();
};

var playerPrompt = function() {
	//ads a divider, displays remainingGuesses, prompts user to enter a letter
	console.log("\n----------------------------------------\n");
	console.log( remainingGuesses + " remaining guesses\n")
	if (remainingGuesses !=== 0) {
		inquirer.prompt([
			{
				type: "value",
				name: "guessedLetter",
				message: "Guess a letter!\n"
			}
		]).then(function(response){


			if (correct) {
				console.log("\n----------------------------------------\n");
				console.log("That is correct!");
				playerPrompt();
			} else if (incorrect) {
				console.log("\n----------------------------------------\n");
				console.log("that guess is incorrect");
				remainingGuesses--;
				playerPrompt();
			} else if (invalid) {
				console.log("\n----------------------------------------\n");
				console.log("That is not a valid input");
				playerPrompt();
			} else if (repeatLetter) {
				console.log("\n----------------------------------------\n");
				console.log("You have already guessed that letter");
				playerPrompt();
			} else if (remainingGuesses === 0) {
				console.log("\n----------------------------------------\n");
				console.log("No more guesses remaining, you lose!");

			} else if (winner === true) {
				console.log("\n----------------------------------------\n");
				console.log("Good job! You win!")
				inquirer.prompt([
					{
						type: "confirm",
						name: "play again?",
						message: "Would you like to play again?"
					}
				]).then(startGame());
			}
		})
	}
};

startGame();

// Game chooses random word
	// Shows _ in place of unguessed letters 
// If correct
	// console.log(Correct!!); 
	// console.log("\n----------------------------------------\n");
	// replace _ with guessed letter
	// add letter to "already guessed" array
	// console.log("guess another letter");
// If wrong
	// console.log(Incorrect!!);
	// console.log("\n----------------------------------------\n");
	// add letter to "already guessed" array
	// i-- remaining guesses
	// console.log("guess another letter");
// If already guessed
	// console.log("Youve already guessed that letter!");
	// console.log("Guess another letter")
// If guesses remaining === 0
	// console.log("youve lost!");
	// console.log("Ready for another game?"); 

