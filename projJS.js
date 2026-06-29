const wordList = 
[
    'APPLE', 'PLANT', 'BRAIN', 'HUMID'
]

const randIndex = Math.floor(Math.random() * wordList.length)

let answer = wordList[randIndex]
// made a word list to choose from, then randIndex randomizes through the array's index, math.floor is to erase decimals, then the answer is chosen with the answer variable, print out the word from the array of this [randIndex] randomized index


let currentGuess = ''
let currentRow = 0
let gameOver = false
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const tiles = document.querySelectorAll('.tile')

document.addEventListener('keydown', function(event){
   const key = event.key.toUpperCase() 

    if(alphabet.includes(key) && currentGuess.length < 5 && gameOver === false){
       const tileIndex = currentRow * 5 + currentGuess.length
       tiles[tileIndex].textContent = key
       currentGuess += key
       console.log(currentGuess)
        
    }

    if (key === 'BACKSPACE' && gameOver === false && currentGuess.length > 0){
        const rmvTile = currentRow * 5 + currentGuess.length - 1 
        tiles[rmvTile].textContent = ''
        currentGuess = currentGuess.substring(0, currentGuess.length -1)
        console.log(currentGuess)
    }


})

// The first if statement in this function listens to when the user inputs a key that is only an alphabet, it checks if its an alphabet or not through the alphabet constant I made. Then it checks if the tile has less than 5 letters and if the game is still going, if so, then add any letter the user inputs into the next tile.

// The second if statement checks if the player tries to delete letters he entered by listening to BACKSPACE, and the current guess has to not be empty. Take the same equation from before that adds the listened key, and this time it is used to find the tile that has the current guess's last letter, and clears that tile, as well as deleting the letter.






