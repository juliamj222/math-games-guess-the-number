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

  async function getANumber()   {
    let randomNumber=Math.floor(Math.random()*100);
    let guess= await ask (`Is your number ${randomNumber}, higher or lower? \n yup \nH \nL `)
    
    console.log(`You entered: ${guess}`);
    if (guess==='yup') {console.log('Yay! I solved it!')
    process.exit();
  }

    else {console.log('Ok, let me think...')
  
    process.exit();}  
  }

  getANumber()


  
  }



