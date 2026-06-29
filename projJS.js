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
       const checkTiles = currentRow * 5 + currentGuess.length
       tiles[checkTiles].textContent = key
       currentGuess = currentGuess + key
       console.log(currentGuess)
        
    }
})






