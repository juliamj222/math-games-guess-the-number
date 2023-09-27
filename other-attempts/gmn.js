// ? Guess My Number (using educated guesses instead of random guesses)

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {

console.log("Let's play a game where you (human) make up a number, and I (computer) try to guess it.");

let secretNumber = await ask("What is your secret number?\nWrite one number between 1-100.\nI won't peek, I promise...\n");
console.log('You entered: ' + secretNumber);

  if (secretNumber < 0 || secretNumber > 100 || isNaN(secretNumber)) {
console.log('Please, make sure to input a number between 1-100. Start over!')
process.exit();
  } else {
  console.log('Let\'s start!');
  }

var min = 1;
var max = 100;
var randomNumber = getARandomNumber(min, max);
var attempts = 1;

  while (true) {
let guessResponse = await ask(`Attempt Number ${attempts}.\nI think your number is ${randomNumber}.\nIs this right? Is your number higher or lower?\n   (R) - Right\n   (H) - Higher\n   (L) - Lower\n`);
let guess = guessResponse.toLowerCase();

    if (guess === 'r') {
console.log('Yay! I solved it!\nEnd of the game. \nStart over if you want to play again!')
process.exit();

    } else if (guess === 'h') {
console.log('You said that your number is higher! Let me think...');
min = randomNumber + 1;
randomNumber = getARandomNumber(min, max);

    } else if (guess === 'l') {
    console.log('You said that your number is lower! Let me think...');
    max = randomNumber - 1;
    randomNumber = getARandomNumber(min, max);

    } else {
    console.log('Please, answer (R) - Right, (H) - Higher, or (L) - Lower.');
    }
    attempts ++;
    }

function getARandomNumber(min, max) {
min = Math.ceil(min);
 max = Math.floor(max);
return Math.floor((min+max)/2);
}
}