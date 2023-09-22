/* const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
} */

/* async function getANumber()   {
    let randomNumber=Math.floor(Math.random()*100);
    await ask (`Is your number ${randomNumber}? \nYes!!! \nNo, my number is higher.\nNo, my number is lower.`)
    process.exit();
  }

  getANumber() */


/*   for (let i=0;i<=10;i=i+1) {
    console.log(i)
} */


/* function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomIntInclusive(1, 100)); */



/* function addToFive(num) {
    return num+5
}

for (i=0; i <=10; i++) {
    console.log(addToFive(i))
} */

function test() {
    let str = "";
    for (let i = 0; i <= 10; i++) {
        str += i;
    }
    return str;
}

console.log(test());

function x() {
    return "Julia, Menendez"; 
}

console.log(x());