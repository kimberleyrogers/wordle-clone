const todaysWordle = wordleArray[Math.floor(Math.random() * wordleArray.length)].toUpperCase()
const todaysWordleArray = todaysWordle.split("")
let wordleArrayDupe = []

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
    if(e.key == 'Enter') {
        messageLocation.innerHTML = ".........."
        userGuess = guessLocation.value.toUpperCase()
        if(userGuess.length < 5) {
            messageLocation.innerHTML = "try again with five letters"
            guessLocation.value = ""
        } else {
            if(validWords.includes(userGuess)) {
                checkColours(userGuess, levelCounter)
                guessLocation.value = ""
                if (levelCounter == 6 && !(winStatus == "win")) {
                    lose()
                }
                levelCounter++
            } else {
                messageLocation.innerHTML = "do you need a dictionary?"
            }
        }
    }
})

//function for each valid guess - checks each letter against the wordle, adds to box and displays colour
function checkColours(userGuess, levelCounter) {
    let letterPositionCounter = 0
    const userGuessArray = userGuess.split("")
    resetDuplicateWordleArray()
    for (const guessLetter of userGuessArray) {
        const location = document.getElementById("guess-" + levelCounter + "-letter-" + letterPositionCounter)
        location.innerHTML = guessLetter
        if(userGuessArray[letterPositionCounter] === wordleArrayDupe[letterPositionCounter]) {
            location.classList.add('match')
            wordleArrayDupe[letterPositionCounter] = '.'
        } 
        letterPositionCounter++
    }
    letterPositionCounter = 0
    for (const guessLetter of userGuessArray) {
            wordleArrayDupeLetterPositionCounter = 0
            for (let wordleDupeLetter of wordleArrayDupe) {
                if(guessLetter == wordleDupeLetter) {
                    const location = document.getElementById("guess-" + levelCounter + "-letter-" + letterPositionCounter)
                    location.classList.add('partial-match')
                    wordleArrayDupe[wordleArrayDupeLetterPositionCounter] = '.'
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
    messageLocation.innerHTML = "so close. the wordle was " + todaysWordle
    guessLocation.disabled = true
    //add css styling for lose
}

function win() {
    winStatus = 'win'
    messageLocation.innerHTML = "nailed it!"
    guessLocation.disabled = true
    //add css styling for win
}

//make the 'wordle' title dance on hover or on load
//make the error/win/lose message dance when they appear
//light mode button to change css
