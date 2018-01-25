var letters = require('./letters.js');

var wordBank = ['aerodynamics', 'bacteriology', 'ornithology',
 'taxonomy', 'metallurgy', 'xenobiology', ];

var wordArray = function(word) {
	this.word = word;
	this.length = word.length;
};

// export both wordbank and word array;
module.exports = { 
	wordBank: wordBank,
	wordArray: wordArray
};