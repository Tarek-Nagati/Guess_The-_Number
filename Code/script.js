'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⚠ No Number Entered!');

    //when the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎈 Well Done 🎈 ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore += 1;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when the guessed number is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? ' Number is Too High ' : ' Number is Too Low '
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' Game Over! ');
      document.querySelector('.score').textContent = 0;
      if (highScore >= 1) {
        highScore -= 1;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  }
});

// activate the again button (restore all the elements as it was)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
