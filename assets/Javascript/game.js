// I created an array for the computer and online user.
var theAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//I created variables. They start at 0, the max number of guesses, and an empty array.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var soFar = [];
var compChoice; 

// New computer choice
	compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
		console.log("The computer has chosen the letter: " + compChoice);

//This is what starts every time the user presses a key, and on the key release:
document.onkeyup = function(event) {

	//The user presses a key, it records what key was pressed under var userGuess.
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	//This section logs all the keys pressed by the user into "soFar," by pushing them into the empty array.
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		soFar.push(userGuess);
		document.getElementById("soFar").innerHTML = soFar.join(", ");
	}


	//This checks if the user entered the correct letters
		if (event.keyCode >= 65 && event.keyCode <= 90) { 


			//If the user guesses right, increase the number of wins and reset the number of guesses left.
			if (userGuess == compChoice) {
				wins++;
				guessesLeft--;
				soFar = [];
				guessesLeft = 10;


				//Show updated stats
				document.getElementById("soFar").innerHTML = soFar.join(", ");
				document.getElementById("wins").innerHTML = wins;
				document.getElementById("guessesLeft").innerHTML = guessesLeft;
				document.getElementById("guessesLeft").innerHTML = guessesLeft;


				// Alert the user
				alert("You ARE a psychic! How did you know what letter I was thinking about?!?! '" + userGuess + "' ?");
				alert("Want to try again?");


				//Choose another letter
				compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
				console.log("The computer has chosen the letter: " + compChoice);	

			} else { //If user guesses incorrect then increase the losses count, and  then decrease number of guesses left.
				losses++;
				guessesLeft--;
				//Display updated stats to user:
				document.getElementById("losses").innerHTML = losses;
				document.getElementById("guessesLeft").innerHTML = guessesLeft;
			}
		} else { //If user input is not a letter from the alphabet
			// Alert the user
			alert("Please be sure to choose a letter from the Alphabet (from a to z)");
		}

	//When the user has no more guesses left, reset the counters back to zero.
		//If the guessesLeft == 0, reset guessesLeft back to 10.
		if (guessesLeft == 0) {
			guessesLeft = 10;
			soFar = [];

			//Display updated stats to user:
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			document.getElementById("soFar").innerHTML = soFar.join(", ");

			// Alert the user
			alert("THE GAME IS OVER")
			alert("Uh oh! You ran out of guesses. Do you want to try again?")

			//Choose a new letter
			compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
			console.log("The computer has chosen the letter: " + compChoice);
		}	
}