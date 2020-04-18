let prompt = require("prompt-sync")();
let answer = Math.ceil(Math.random() * 100);

for (let x = 1; x <= 10; x++) {
  let guess = Number(prompt("Guess a number (1-100): "));
  if (guess === answer) {
    if (x === 1) {
      console.log("WOW! You got it in one try!!");
      return;
    } else {
      console.log("You got it! That took " + x + " attempts.");
      return;
    }
  } else if (guess < answer) {
    console.log("Too low!");
  } else if (guess > answer) {
    console.log("Too high!");
  }
  if (x === 10) {
    console.log("You ran out of guesses. Better luck next time!");
  }
  if (isNaN(guess)) {
    console.log("You can only guess a number. Why whould you even try that?");
  }
  if (guess > 100) {
    console.log("Your guess must be under 100 or below.");
  }
}