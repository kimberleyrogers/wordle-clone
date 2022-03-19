//array of possible words - small to begin with
const wordleArray = ['hello', 'jimin', 'jhope', 'kimbo'];
//randomly select a word from the array for today's word
const todaysWordle = wordleArray[Math.floor(Math.random() * wordleArray.length)]
console.log("The Wordle for today is: " + todaysWordle)
//split today's wordle into an array
//future - can use the same function as below
const todaysWordleArray = todaysWordle.split("")
console.log("today's Wordle array: " + todaysWordleArray)

//take a first guess from the user
const firstUserGuess = prompt("What is your guess?")
console.log("user first guess is: " + firstUserGuess)

//split the user prompted word into an array
//future - this will be a function used for each guess
const firstUserGuessArray = firstUserGuess.split("")
console.log("user first guess array is: " + firstUserGuessArray)

let letterPositionCounter = 0
//check if the letter+position matches, turn letter green
for (const guessLetter of firstUserGuessArray) {
    //i need to access the location of the letter and compare directly to equivalent wordle letter
    // console.log(guessLetter)
    // console.log(todaysWordleArray[letterPositionCounter])
    // console.log("before if statement the counter = " + letterPositionCounter)
    // console.log("firstUserGuessArray[letterPositionCounter]" + firstUserGuessArray[letterPositionCounter])
    // console.log("todaysWordleArray[letterPositionCounter" + todaysWordleArray[letterPositionCounter])
    
    if (firstUserGuessArray[letterPositionCounter] === todaysWordleArray[letterPositionCounter]) {
        // console.log("this is a direct match")
        // console.log("at end of if statement the counter = " + letterPositionCounter)
    }
    letterPositionCounter++
}


//else if check letter is in word, turn letter yellow
// for (const guessLetter of firstUserGuessArray) {
//     console.log("first letter of array is: " + guessLetter)
//     for (const wordleLetter of todaysWordleArray) {
//         if (guessLetter == wordleLetter) {
//             console.log("this would be yellow")
//         }
//     }
// }

//else turn letter grey
