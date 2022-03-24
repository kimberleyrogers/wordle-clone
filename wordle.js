//array of possible words - small to begin with
// const wordleArray = ['HELLO', 'RESET', 'BEACH', 'SHARK'];
//randomly select a word from the array for today's word //split today's wordle into an array
const todaysWordle = wordleArray[Math.floor(Math.random() * wordleArray.length)].toUpperCase()
// const todaysWordleBig = todaysWordle.toUpperCase()
// console.log(todaysWordleBig)
console.log(wordleArray)
const todaysWordleArray = todaysWordle.split("")
console.log("today's Wordle array: " + todaysWordleArray)
let wordleArrayDupe = []

// let wordleArrayDupe = [...todaysWordleArray]

function resetDuplicateWordleArray() {
    for (i = 0; i < todaysWordleArray.length; i++) {
        wordleArrayDupe[i] = todaysWordleArray[i]
    }
}

const buttonLocation = document.getElementById("refresh")
buttonLocation.innerHTML = "Another Game?"
buttonLocation.addEventListener('click', function() {
    window.location.reload()
})

const guessLocation = document.getElementById("guess-box")
const messageLocation = document.getElementById("error-message")
let levelCounter = 1
let userGuess = ""
let userGuessArray = ""
let winStatus = ""

guessLocation.addEventListener('keypress', function(e) {
    //when enter key is pressed, take value as guess
    if(e.key == 'Enter') {
        messageLocation.innerHTML = ".........."
        userGuess = guessLocation.value.toUpperCase()
        if(userGuess.length < 5) {
            messageLocation.innerHTML = "try again with five letters"
            guessLocation.value = ""
        } else {
            console.log("firstUserGuess is " + userGuess)
            //check word is valid
            if(validWords.includes(userGuess)) {
                console.log("guessLocation.value is " + guessLocation.value)
                // const userGuessArray = userGuess.split("")
                // console.log("firstUserGuessArray is " + userGuessArray)
                checkColours(userGuess, levelCounter)
                //word is a valid guess so increase level counter
                console.log(levelCounter)
                guessLocation.value = ""
                if (levelCounter == 6 && !(winStatus == "win")) {
                    lose()
                }
                levelCounter++
            } else {
                messageLocation.innerHTML = "do you need a dictionary?"
                // guessLocation.value = ""
            }
        }
    }
})

//function for each valid guess - checks each letter against the wordle, adds to box and displays colour
function checkColours(userGuess, levelCounter) {
    let letterPositionCounter = 0
    const userGuessArray = userGuess.split("")
    // console.log("worldle array dupe before reset is " + wordleArrayDupe)
    resetDuplicateWordleArray()
    console.log("firstUserGuessArray is " + userGuessArray)
    console.log("wordleArrayDupe is " + wordleArrayDupe)

    for (const guessLetter of userGuessArray) {
        console.log("guessLetter ", guessLetter)
        // const index = userGuessArray.indexOf(guessLetter)
        const location = document.getElementById("guess-" + levelCounter + "-letter-" + letterPositionCounter)
        location.innerHTML = guessLetter

        if(userGuessArray[letterPositionCounter] === wordleArrayDupe[letterPositionCounter]) {
            
            location.classList.add('match')
            wordleArrayDupe[letterPositionCounter] = '.'
            console.log("yes it was green - " + userGuessArray[letterPositionCounter] + " and the wordle dupe array is " + wordleArrayDupe)
            console.log(wordleArrayDupe[letterPositionCounter])
        } 
        letterPositionCounter++
    }
    letterPositionCounter = 0
    for (const guessLetter of userGuessArray) {
            wordleArrayDupeLetterPositionCounter = 0
            for (let wordleDupeLetter of wordleArrayDupe) {
                if(guessLetter == wordleDupeLetter) {
                    console.log("userGuessArray is " + userGuessArray)
                    const location = document.getElementById("guess-" + levelCounter + "-letter-" + letterPositionCounter)
                    location.classList.add('partial-match')
                    console.log("guess letter is " + guessLetter)
                    console.log("worldle dupe letter is " + wordleDupeLetter)
                    wordleArrayDupe[wordleArrayDupeLetterPositionCounter] = '.'
                    console.log("wordle dupe letter counter is " + wordleArrayDupeLetterPositionCounter)
                    console.log("yes it was yellow - " + guessLetter + " and the wordle dupe array is " + wordleArrayDupe)
                    break;
            } 
            wordleArrayDupeLetterPositionCounter++
        }
        letterPositionCounter++ 
    }
    
    //check if guess was winning guess 
    if(userGuess === todaysWordle){
        win()
    }
}

function lose() {
    console.log("You lost... what are you playing at?")
    messageLocation.innerHTML = "so close"
    guessLocation.disabled = true
    //add css styling for lose
}

function win() {
    console.log("You won... nice one you fricking genius!")
    messageLocation.innerHTML = "nailed it!"
    guessLocation.disabled = true
    //add css styling for win
}


//dark mode button to change css
//make the 'wordle' title dance on hover or on load
//write the MD file
//clean up console logs and html
