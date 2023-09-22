const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  if (secretNumber<0|| secretNumber>100 || isNaN(secretNumber)) {console.log('Please, make sure to input a number between 1-100. Start over!')
  process.exit();}
  else {console.log('Let\'s start!')}  

  async function getARandomNumber(min, max)   {
    min = Math.ceil(min);
    max = Math.floor(max);
    return randomNumber=Math.floor(Math.random() * (max - min + 1) + min);
  }
  getARandomNumber(1,100)

    let guess= await ask (`I think your number is ${randomNumber}. Is this right? Is your number  higher or lower? \n (R) - Right) \n (H) - Higher \n (L) - Lower `)
    
    
    if (guess.toLowerCase()==='r') {console.log('Yay! I solved it!\nEnd of the game. \nStart over if you want to play again!')
    process.exit();
  } else if (guess.toLowerCase()==='h') {console.log('Higher')
  process.exit();
} else if (guess.toLowerCase()==='l') {console.log('Lower')
process.exit();
}
    else {console.log('Please, answer \n (R) - Right) \n (H) - Higher \n (L) - Lower.')
  
   process.exit();
  }  
  }


