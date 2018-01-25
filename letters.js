var Words = require("./words.js");

var letters = function(word) {
	this.word = word;
	this.letterSplit = word.split('');
	this.placeholders = this.letter.length;
	this.placeholdersGuesses = [];
	this.addPlaceholders = function() {
		for (i = 0; i < this.placeholders; i++) {
			this.placeholdersGuesses.push("_");
		}
	};
}

module.exports = letterArray;