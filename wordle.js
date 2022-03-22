//array of possible words - small to begin with
const wordleArray = ['HELLO', 'RESET', 'BEACH', 'SHARK'];
//randomly select a word from the array for today's word //split today's wordle into an array
const todaysWordle = wordleArray[Math.floor(Math.random() * wordleArray.length)]
const todaysWordleArray = todaysWordle.split("")
console.log("today's Wordle array: " + todaysWordleArray)

const guessLocation = document.getElementById("guess-box")
const messageLocation = document.getElementById("error-message")
let levelCounter = 1
let userGuess = ""
let userGuessArray = ""
let winStatus = ""

guessLocation.addEventListener('keypress', function(e) {
    //when enter key is pressed, take value as guess
    if(e.key == 'Enter') {
        userGuess = guessLocation.value.toUpperCase()
        if(userGuess.length < 5) {
            messageLocation.innerHTML = "5 letters yeah?"
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
                messageLocation.innerHTML = "Do you need a dictionary?"
                guessLocation.value = ""
            }
        }
    }
})

//function for each valid guess - checks each letter against the wordle, adds to box and displays colour
function checkColours(userGuess, levelCounter) {
    let letterPositionCounter = 0
    const userGuessArray = userGuess.split("")
    console.log("firstUserGuessArray is " + userGuessArray)
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
    if(userGuess === todaysWordle){
        win()
    }
}

function lose() {
    console.log("You lost... what are you playing at?")
    messageLocation.innerHTML = "You lost... what are you playing at?"
    guessLocation.disabled = true
}

function win() {
    console.log("You won... nice one you fricking genius!")
    messageLocation.innerHTML = "You won... nice one you fricking genius!"
    guessLocation.disabled = true
}