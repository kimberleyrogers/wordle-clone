//array of possible words - small to begin with
const wordleArray = ['HELLO', 'RESET', 'BEACH', 'SHARK'];
//randomly select a word from the array for today's word //split today's wordle into an array
const todaysWordle = wordleArray[Math.floor(Math.random() * wordleArray.length)]
const todaysWordleArray = todaysWordle.split("")
console.log("today's Wordle array: " + todaysWordleArray)

const guessLocation = document.getElementById("guess-box")
let levelCounter = 1
let userGuess = ""
let userGuessArray = ""

guessLocation.addEventListener('keypress', function(e) {
    //when enter key is pressed, take value as guess
    if(e.key == 'Enter') {
        userGuess = guessLocation.value.toUpperCase()
        console.log("firstUserGuess is " + userGuess)
        //check word is valid
        if(validWords.includes(userGuess)) {
            console.log("guessLocation.value is " + guessLocation.value)
            const userGuessArray = userGuess.split("")
            console.log("firstUserGuessArray is " + userGuessArray)
            checkColours(userGuessArray, levelCounter)
            //word is a valid guess so increase level counter
            levelCounter++
            console.log(levelCounter)
            guessLocation.value = ""
        } else {
            //MAKE THIS APPEAR IN THE HTML
            console.log("Word wasn't valid")
            guessLocation.value = ""
        }
    }
})

//function for each valid guess - checks each letter against the wordle, adds to box and displays colour
function checkColours(userGuessArray, levelCounter) {
    console.log(userGuessArray, levelCounter)
    let letterPositionCounter = 0
    for (const guessLetter of userGuessArray) {
        const location = document.getElementById("guess-" + levelCounter + "-letter-" + letterPositionCounter)
        location.innerHTML = guessLetter
        if (userGuessArray[letterPositionCounter] === todaysWordleArray[letterPositionCounter]) {
            location.classList.add('match')
        } else if (todaysWordle.includes(guessLetter)) {
            //if you can - try to resolve issue that Kenni identified
            location.classList.add('partial-match')
        } else {
            location.classList.add('no-match')
        }
        letterPositionCounter++
    }
    //check if guessing was winning guess 
    if(document.querySelectorAll('.match').length == 5){
        console.log("You won!")
    }
}


//if still broken just use classname = instead of classList.add
//css for pattern on page

//counter for each level attempted
//when input is 5 letters, matches something on the acceptable list, store it and add one to the counter
//
//after counter hits 5, if not won, you lose
//name rows in same style as level - so you can link counter, row, guess etc. altogether with an index
//ideally one set of code for the round that can be reused - tricky to declare a lot of it inside the function