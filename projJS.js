const wordList = 
[
    'APPLE', 'PLANT', 'BRAIN', 'HUMID'
]

const randIndex = Math.floor(Math.random() * wordList.length)

let answer = wordList[randIndex]

let currentGuess = ''
let currentRow = 0
let gameOver = false

console.log(gameOver)

