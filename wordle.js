//array of possible words - small to begin with
const wordleArray = ['hello', 'jimin', 'jhope', 'kimbo'];
//randomly select a word from the array for today's word //split today's wordle into an array
const todaysWordle = wordleArray[Math.floor(Math.random() * wordleArray.length)]
const todaysWordleArray = todaysWordle.split("")
console.log("today's Wordle array: " + todaysWordleArray)

//link from additional JS file next
// const validWords = ['reset', 'going', 'beach', 'hello', 'jimin', 'jhope', 'kimbo'];

//take a first guess from the user //split the user prompted word into an array
// const firstUserGuess = prompt("What is your guess?")
// const firstUserGuessArray = firstUserGuess.split("")
// console.log("user first guess array is: " + firstUserGuessArray)

//get value from input box using add event listener
//before - prompt happened first and everything on the page followed
//now you need the entry of a word to be the trigger for everything else
const guessLocation = document.getElementById("guess-box")
let levelCounter = 1
let firstUserGuess = ""
let firstUserGuessArray = ""
guessLocation.addEventListener('keypress', function(e) {
    //when enter key is pressed, take value as guess
    
    if(e.key == 'Enter') {
        firstUserGuess = guessLocation.value.toUpperCase()
        console.log("firstUserGuess is " + firstUserGuess)
        //check word is valid
        if(validWords.includes(firstUserGuess)) {
            console.log("guessLocation.value is " + guessLocation.value)
            console.log("firstUserGuess is " + firstUserGuess)
            const firstUserGuessArray = firstUserGuess.split("")
            console.log("firstUserGuessArray is " + firstUserGuessArray)
            checkColours(firstUserGuessArray)
            //word is a valid guess so increase level counter
            levelCounter++
            console.log(levelCounter)
            guessLocation.value = ""
        } else {
            console.log("Word wasn't valid")
        }
    }
    
})




//function for each valid guess - checks each letter against the wordle and displays colour
function checkColours(firstUserGuessArray) {
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
//if all green = you've won


//css for pattern on page

//counter for each level attempted
//when input is 5 letters, matches something on the acceptable list, store it and add one to the counter
//
//after counter hits 5, if not won, you lose
//name rows in same style as level - so you can link counter, row, guess etc. altogether with an index
//ideally one set of code for the round that can be reused - tricky to declare a lot of it inside the function