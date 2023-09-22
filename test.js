const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

async function getANumber()   {
    let randomNumber=Math.floor(Math.random()*100);
    await ask (`Is your number ${randomNumber}? \nYes!!! \nNo, my number is higher.\nNo, my number is lower.`)
    process.exit();
  }

  getANumber()






/*   for (let i=0;i<=10;i=i+1) {
    console.log(i)
} */