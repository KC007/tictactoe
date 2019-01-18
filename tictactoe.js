var boxes = document.querySelectorAll('.box');
var startBtn = document.querySelector('.start-btn');
var startAgainBtn = document.querySelector('.startAgain-btn');
var heading = document.querySelector('h1');
var firstPlayerScore = document.querySelector('.firstPlayerScore');

/*input*/
var nameOne = document.querySelector('.playerOneName-input');
var nameForm = document.querySelector('.playersNameForm');
var nameTwo = document.querySelector('.playerTwoName-input');

/* output */
var playerOneName = document.querySelector("#playerOneName");
var playerTwoName = document.querySelector("#playerTwoName");

/*
|====================
|players' name input
|====================
*/


/*
|=============
|Initiate game
|=============
*/
var currentPlayer = 1
var someoneHasWon = false

var PLAYER_REGISTER = [ playerOneName, playerTwoName ]
var flashPlayer = (playerRegisterId) => {
    PLAYER_REGISTER.forEach((playerNameElement, currentRegisterId) => {
        if (playerRegisterId === currentRegisterId) {
           // Turn on the animations for the current player 
            playerNameElement.classList.add('blink')
        } else {
            // Turn off the animations for the other players
            playerNameElement.classList.remove('blink')
        }
    })
}
flashPlayer(currentPlayer)

var startGame = function () {

    playerOneName.textContent = nameOne.value;
    playerTwoName.textContent = nameTwo.value;
    nameForm.classList.add('hidden');

    document.querySelector('.board').classList.remove('splash');

    document.querySelector('body').classList.add('colorfulBackground');
    

    var playerMakeMove = function(event) {
        
        //if no name inputs, game cannot start 

        
        if( event.target.classList.contains('selectedA') || (event.target.classList.contains('selectedB'))) {
            return;
        }

        if(someoneHasWon == true) {
            return;
        } 
        
        heading.textContent = "Player 1, select a square";

        if (currentPlayer == 1){
            heading.textContent = "Player 2, select a square";
            event.target.classList.add('selectedA');
            currentPlayer = 0;
        }
        else { 
            heading.textContent = "Player 1, select a square";
            event.target.classList.add('selectedB');
            currentPlayer = 1;
        }

        flashPlayer(currentPlayer);
        checkWinner(); 
        

    }

    boxes.forEach(function(box) {
    box.addEventListener('click', playerMakeMove)
    })

}



/*
===========
game logic
===========

*/

var checkWinner = function() {
    console.log('checking winner..')
    if((boxes[0].classList.contains('selectedA')) && (boxes[1].classList.contains('selectedA')) && (boxes[2].classList.contains('selectedA')) || 
    (boxes[3].classList.contains('selectedA')) && (boxes[4].classList.contains('selectedA')) && (boxes[5].classList.contains('selectedA')) ||
    (boxes[6].classList.contains('selectedA')) && (boxes[7].classList.contains('selectedA')) && (boxes[8].classList.contains('selectedA')) ||
    (boxes[0].classList.contains('selectedA')) && (boxes[3].classList.contains('selectedA')) && (boxes[6].classList.contains('selectedA')) || 
    (boxes[1].classList.contains('selectedA')) && (boxes[4].classList.contains('selectedA')) && (boxes[7].classList.contains('selectedA')) ||
    (boxes[2].classList.contains('selectedA')) && (boxes[5].classList.contains('selectedA')) && (boxes[8].classList.contains('selectedA')) ||
    (boxes[0].classList.contains('selectedA')) && (boxes[4].classList.contains('selectedA')) && (boxes[8].classList.contains('selectedA')) ||
    (boxes[2].classList.contains('selectedA')) && (boxes[4].classList.contains('selectedA')) && (boxes[6].classList.contains('selectedA')) )

    {
    heading.textContent = "Player one is the winner";
    someoneHasWon = true;
    firstPlayerScore.textContent = 1;
    }

    else if ((boxes[0].classList.contains('selectedB')) && (boxes[1].classList.contains('selectedB')) && (boxes[2].classList.contains('selectedB')) || 
    (boxes[3].classList.contains('selectedB')) && (boxes[4].classList.contains('selectedB')) && (boxes[5].classList.contains('selectedB')) ||
    (boxes[6].classList.contains('selectedB')) && (boxes[7].classList.contains('selectedB')) && (boxes[8].classList.contains('selectedB')) ||
    (boxes[0].classList.contains('selectedB')) && (boxes[3].classList.contains('selectedB')) && (boxes[6].classList.contains('selectedB')) || 
    (boxes[1].classList.contains('selectedB')) && (boxes[4].classList.contains('selectedB')) && (boxes[7].classList.contains('selectedB')) ||
    (boxes[2].classList.contains('selectedB')) && (boxes[5].classList.contains('selectedB')) && (boxes[8].classList.contains('selectedB')) ||
    (boxes[0].classList.contains('selectedB')) && (boxes[4].classList.contains('selectedB')) && (boxes[8].classList.contains('selectedB')) ||
    (boxes[2].classList.contains('selectedB')) && (boxes[4].classList.contains('selectedB')) && (boxes[6].classList.contains('selectedB')) )

    {

    heading.textContent = "Player two is the winner";
    someoneHasWon = true;
    }

    if ((someoneHasWon === false && document.querySelectorAll('.selectedA').length >= 4) || (someoneHasWon === false && document.querySelectorAll('.selectedB').length >= 4)) 
    
    {
    heading.textContent = "It's a tie";
    someoneHasWon = true;
    }
}

//reset game 

var reset = function() {

    boxes.forEach(function(box) {
    box.classList.remove('selectedA');
    });

    boxes.forEach(function(box) {
    box.classList.remove('selectedB');
    });

    currentPlayer = 1
    someoneHasWon = false

    playerOneName.textContent = " ";
    playerTwoName.textContent = " ";

    nameForm.classList.remove('hidden');

    heading.textContent = "Conditional Tic Tac Toe"

    document.querySelector('.board').classList.add('splash');

    document.querySelector('body').classList.remove('colorfulBackground');
}

/*
========
buttons
========
*/

startBtn.addEventListener('click', startGame);
startAgainBtn.addEventListener('click', reset);