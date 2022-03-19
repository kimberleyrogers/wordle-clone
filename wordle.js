//array of possible words - small to begin with
const wordleArray = ['hello', 'jimin', 'jhope', 'kimbo'];
//randomly select a word from the array for today's word //split today's wordle into an array
const todaysWordle = wordleArray[Math.floor(Math.random() * wordleArray.length)]
const todaysWordleArray = todaysWordle.split("")
console.log("today's Wordle array: " + todaysWordleArray)

//take a first guess from the user //split the user prompted word into an array
const firstUserGuess = prompt("What is your guess?")
const firstUserGuessArray = firstUserGuess.split("")
console.log("user first guess array is: " + firstUserGuessArray)

let letterPositionCounter = 0
//check if the letter+position matches, turn letter green
for (const guessLetter of firstUserGuessArray) {
    //update the h1 for each letter //could be updating anything - a p in a box in grid/flex 
    const location = document.getElementById("letter-" + letterPositionCounter)
    location.innerHTML = guessLetter
    //update the class for each letter that is a green match
    if (firstUserGuessArray[letterPositionCounter] === todaysWordleArray[letterPositionCounter]) {
        location.classList.add('match')
    } else if (todaysWordle.includes(guessLetter)) {
        //if you can - try to reoslve issue that Kenni identified
        console.log(guessLetter + " would be yellow")
        location.classList.add('partial-match')
    } else {
        location.classList.add('no-match')
    }

    letterPositionCounter++
}

//if all green = you've won
