'use strict';


// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);


// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 13;

// console.log(document.querySelector('.number').textContent);

// console.log(document.querySelector('.score').textContent = 20);

// CHECKING THE INPUT VALUE.

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let againSecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// function that accepts and returns string.
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


const betNumber = Math.random() * 20

// console.log(document.querySelector('.secretNumber').textContent = Math.trunc(betNumber));

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = '20';
    console.log('Cut it out!')
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log('sult');



    // When there is no input.
    if (!guess) {
        displayMessage('⛔ No Number!');
        // document.querySelector('.message').textContent = '⛔ No Number!';

        // When the guess is right
    } else if (guess === secretNumber) {
        console.log(document.querySelector('.number').textContent = secretNumber)
        displayMessage('🎉 Correct Number!');
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When the guess is different!
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '👆🏾 Too High!' : '👇🏾 Too Low!')
            // document.querySelector('.message').textContent = guess > secretNumber ? '👆🏾 Too High!' : '👇🏾 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😖 You Lose!');
            // document.querySelector('.message').textContent = '😖 You Lose!';
            document.querySelector('.score').textContent = 0;
        }

    }
    // } else if (guess > secretNumber) {

    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '👆🏾 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😖 You Lose!'
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // When the guess is too low!    
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '👇🏾 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😖 You Lose!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

});


