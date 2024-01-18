```
$ node index.js
Please think of a number between 1 and 100 (inclusive).
I will try to guess it.

Is it... 50? N
Is it higher (H), or lower (L)? H
Is it... 75? N
Is it higher (H), or lower (L)? L
Is it... 63? N
Is it higher (H), or lower (L)? H
Is it... 69? N
Is it higher (H), or lower (L)? L
Is it... 66? Y
Your number was 66!
```

# Stories

## Pick a number, any number

**Given** the player starts the game with the command `node index.js` in the terminal

**Then** the computer asks the player if their number is a random number between 1 and 100

**And** waits for an answer, which it stores as a variable

## Let the computer win

**Given** the computer has guessed a number

**When** the player responds "yes" (or "y")

**Then** the game exits with a victory message.

> e.g. `Your number was XX!`

## The computer guessed wrong

**Given** the computer has guessed a number

**When** the player responds "no" (or "n")

**Then** the computer asks if the number is higher or lower

## Modify your guess range

**Given** the computer guessed the incorrect number

**When** the player responds "higher" ("h") or "lower" ("l")

**Then** the computer modifies the range it guesses within based on the answer

**And** guesses a new number within the modified range

Given the example above the computer now guesses between 42 and 100



## Role Reversal!

The reverse game, where the computer picks a number, and the person guesses it. 

**Given** The game has been started with `node reverse_game.js`

**Then** the game will ask you to guess a number

**And** if you guess wrong it will tell you if you guessed too high or too low

**And** prompt you to guess again

**When** you guess correctly the computer will congratulate you, and end the game

