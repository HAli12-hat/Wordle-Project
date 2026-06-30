const wordList = 
[
    'PLANT', 'APPLE', 'HUMID'
]

let randIndex = Math.floor(Math.random() * wordList.length)

let answer = wordList[randIndex]
// made a word list to choose from, then randIndex randomizes through the array's index, math.floor is to erase decimals, then the answer is chosen with the answer variable, print out the word from the array of this [randIndex] randomized index


let currentGuess = ''
let currentRow = 0
let gameOver = false
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const msg = document.querySelector('#message')
const tiles = document.querySelectorAll('.tile')
const rstBtn = document.querySelector('#reset-button')

document.addEventListener('keydown', function(event){
   const key = event.key.toUpperCase() 

    if(alphabet.includes(key) && currentGuess.length < 5 && gameOver === false){
        msg.textContent = 'Game messages will appear here!'
    addLetter(key)
    }
   

    if (key === 'BACKSPACE' && gameOver === false && currentGuess.length > 0){
        rmvLetter()
    }

    if(key === 'ENTER' && currentGuess.length === 5 && gameOver === false) {
        // msg.textContent = 'Game messages will appear here!'
        submitGuess()
        
    }
    else if(key === 'ENTER' && currentGuess.length < 5 && gameOver === false){
        msg.textContent = 'Please enter a 5-letter word!'
        
    }


})

 rstBtn.addEventListener('click', function(){
    msg.textContent = 'Game messages will appear here!'
    currentRow = 0
    currentGuess = ''
    randIndex = Math.floor(Math.random() * wordList.length)
    answer = wordList[randIndex] 
    tiles.forEach(function(boxes){
        boxes.textContent = ''
        boxes.classList.remove('correct-color', 'wrong-color', 'almost-color')
    })
    gameOver = false
    console.log(answer)
})

// The first if statement in this function listens to when the user inputs a key that is only an alphabet, it checks if its an alphabet or not through the alphabet constant I made. Then it checks if the tile has less than 5 letters and if the game is still going, if so, then add any letter the user inputs into the next tile.

// The second if statement checks if the player tries to delete letters he entered by listening to BACKSPACE, and the current guess has to not be empty. Take the same equation from before that adds the listened key, and this time it is used to find the tile that has the current guess's last letter, and clears that tile, as well as deleting the letter.

// for the checkGuess() function, a const is declared that takes a copy of the answer and splits its string into an array where each letter is an array item, this is done so later it gets checked with whatever the user types in. It loops twice, first loop: loop through guess indices and check if each index matches answer indices, if yes, color green. Then, mark each correct letter empty in the copy array so it is never used again.

// Second loop: check if guessed letters aren't the same as the answer's, then create a constant that goes through the array of the answer, and look for an unused matching letter. IndexOf() returns -1 if the item isnt there, but if it is there (returns anything but -1), then color it yellow then replace the copy of the answer with an empty string so it is never used again. Else, color it gray.

function addLetter(pressedKey){
      
       const tileIndex = currentRow * 5 + currentGuess.length
    //    find next empty tile using this equation
       tiles[tileIndex].textContent = pressedKey
       currentGuess += pressedKey
    //    add in the next empty tile the pressed key, and update the current guess to have the pressed key at the end 
       console.log(currentGuess)
        
    }

    function rmvLetter(){
        const rmvTileIndex = currentRow * 5 + currentGuess.length - 1 
        tiles[rmvTileIndex].textContent = ''
        currentGuess = currentGuess.substring(0, currentGuess.length -1)
        console.log(currentGuess)
    }


    function checkGuess(){
           const remainingLetters = answer.split('')
        //    check if correct letter, if yes, color tile green 
        for (let i = 0; i < currentGuess.length; i++) {
        if (currentGuess[i] === answer[i]) {
            const tileIndex = currentRow * 5 + i
            tiles[tileIndex].classList.add('correct-color')
            // mark answer as used
            remainingLetters[i] = ''
        }
        }
        // second loop to check for yellow and gray
        for (let i = 0; i < currentGuess.length; i++){
            const tileIndex = currentRow * 5 + i

            if(currentGuess[i] !== answer[i]){
                const foundIndex = remainingLetters.indexOf(currentGuess[i])
                if(foundIndex !== -1){
                    const tileIndex = currentRow * 5 + i
                    tiles[tileIndex].classList.add('almost-color')
                    remainingLetters[foundIndex] = ''
                }
                else{
                    const tileIndex = currentRow * 5 + i
                    tiles[tileIndex].classList.add('wrong-color')
            }
        }
             
             
        
       
    }
}
    
    function submitGuess(){
        checkGuess()
        if (currentGuess === answer){
            msg.textContent = 'You Win!'
            gameOver = true
        }
        else{
        console.log(currentGuess)
        if(currentRow === 5){    
            msg.textContent = `You Lose. The hidden word is: ${answer}`
            gameOver = true
        }
        else{
        currentRow++
        console.log(`current row should be: ${currentRow}`)
        console.log(`current guess should be: ${currentGuess}`)
        currentGuess = ''
        }

        }
         
    }


    

    
     
            // const tileIndex = currentRow * 5 + i
            // tiles[tileIndex].classList.add('almost-color')
        

    
    // if(alphabet.includes(key) && currentGuess.length < 5 && gameOver === false){
    //    const tileIndex = currentRow * 5 + currentGuess.length
    // //    find next empty tile using this equation
    //    tiles[tileIndex].textContent = key
    //    currentGuess += key
    // //    add in the next empty tile the pressed key, and update the current guess to have the pressed key at the end 
    //    console.log(currentGuess)
        
    // }
    // 
    //  if(key === 'ENTER' && currentGuess.length === 5 && gameOver === false) {
        // console.log(currentGuess)
        // currentRow++
        // console.log(`current row should be: ${currentRow}`)
        // console.log(`current guess should be: ${currentGuess}`)
        // currentGuess = ''
               
    // }
//  backup code 







