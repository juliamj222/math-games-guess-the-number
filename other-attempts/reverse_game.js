// ? Reverse Game 

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {

console.log("Let's play a game!!\nI will think of a number between 1 and 100, and you will try to guess it.");

function secretNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1) + min);}
    let solution=secretNumber()
    var attempts = 1;

    let numberGuess = await ask( /*solution + */" \nWhat's my number?");
    numberGuess=parseInt(numberGuess)

while (true) { 

    if (numberGuess < 0 || numberGuess > 100 || isNaN(numberGuess)) {
        console.log('Please, make sure to input a number between 1-100!');}

    else if (parseInt(numberGuess)===solution)
        {console.log(`Attempt Number ${attempts}.\nYou guessed ${numberGuess} and you were right! \nYou won the game!\nGame Over, start over to try again!\n`); process.exit(); 
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