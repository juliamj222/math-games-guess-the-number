const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

async function start() {
  console.log("Welcome to our math games!");

  // players see the options and choose the game
  console.log("What game do you want to play?");
  console.log("1. Guess My Number");
  console.log("2. Reverse Guess My Number");
  const choice = await ask("Select the game you would want to play (1 or 2): ");

  if (choice === '1') {
    await guessMyNumber();
  } else if (choice === '2') {
    await reverseGuessMyNumber();
  } else {
    console.log("Please enter 1 or 2.");
    start();
  }
}
// ? Guess My Number (using educated guesses instead of random guesses)

async function guessMyNumber() {
  //player reads directions and inputs a number
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
    //computer guesses and asks for feedback, tracking the attempts
    while (true) {
  let guessResponse = await ask(`Attempt Number ${attempts}.\nI think your number is ${randomNumber}.\nIs this right? Is your number higher or lower?\n   (R) - Right\n   (H) - Higher\n   (L) - Lower\n`);
  let guess = guessResponse.toLowerCase();
  
      if (guess === 'r') {
  console.log('Yay! I solved it!\nEnd of the game. \nStart over if you want to play again!')
  process.exit(); //exit the game
  
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

// ? Reverse Game 

async function reverseGuessMyNumber() {
//player reads directions, computer generates a number, player guesses a number
    console.log("Let's play a game!!\nI will think of a number between 1 and 100, and you will try to guess it.");
    
    function secretNumber(min, max) {
        min = Math.ceil(1);
        max = Math.floor(100);
        return Math.floor(Math.random() * (max - min + 1) + min);}
        let solution=secretNumber()
        var attempts = 1;
    
        let numberGuess = await ask( /*solution + */" \nWhat's my number?");
        numberGuess=parseInt(numberGuess)
//computer tracks the attempts and gives feedback, and player keeps guessing
    while (true) { 
    
        if (numberGuess < 0 || numberGuess > 100 || isNaN(numberGuess)) {
            console.log('Please, make sure to input a number between 1-100!');}
    
        else if (parseInt(numberGuess)===solution)
            {console.log(`Attempt Number ${attempts}.\nYou guessed ${numberGuess} and you were right! \nYou won the game!\nGame Over, start over to try again!\n`); process.exit(); //exit the game
        }            
        else if (parseInt(numberGuess)<solution)
            {console.log(`Attempt Number ${attempts}.\nYou guessed ${numberGuess} and the answer is a higher number!`); 
    
        }else if (parseInt(numberGuess)>solution)
            {console.log(`Attempt Number ${attempts}.\nYou guessed ${numberGuess} and the answer is a lower number!`);   
            }
    
        numberGuess = parseInt(await ask("Input your next guess: "));
    
        attempts ++;
        }
    }


start(); // function that invokes the game
