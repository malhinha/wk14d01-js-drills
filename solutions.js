/* VERBAL QUESTIONS */

// 1. What is the difference between a parameter and an argument?
// A. Parameters describe a given object while arguments is what gets passed into a function.

// 2. Within a function, what is the difference between return and console.log?
// A. 'return' sends data back to the original point in the flow where it was called;
//    'console.log' sends the  data to the console.log for display (but not to another location within the app flow

/* PALINDROME */

function checkPalindrone(string) {
  if (string.toLowerCase() == string.toLowerCase().split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}


/* SUM ARRAY */

function sumArray(array) {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}


/* PRIME NUMBERS */

function checkPrime(num) {
  let calc = "";

  for (i = 2; i < num; i++) {
    if (!(num % i)) calc = "no";
  }

  if (calc === "no") {
    return false;
  } else {
    return true;
  }
}

function printPrimes(num) {
  console.log('1');

  for (i = 0; i <= num; i++) {
    if (checkPrime(i)) console.log(i);
  }
}


/* ROCK PAPER SCISSORS */

let choiceOptions = ['rock', 'paper', 'scissors'];

function randomMove() {
  let choice = Math.floor(Math.random() * choiceOptions.length);
  return choiceOptions[choice];
}

let computersMove = randomMove();
let usersMove = randomMove();

// resusable strings
let result1 = "paper beats rock";
let result2 = "rock beats scissors";
let result3 = "scissors beats paper";
let computerWins = "computer wins!";
let userWins = "user wins!";

function rockPaperScissors(computer, user) {
  console.log(computer, user);

  if (computer === user) {
    return(`no winner! both players played ${user}`)
  } else if (computer === "rock") {
    if (user === "paper") {
      return (`${result1}, ${userWins}`);
    } else if (user === "scissors") {
      return (`${result2}, ${computerWins}`);
    }
  } else if (computer === "paper") {
    if (user === "scissors") {
      return(`${result3}, ${userWins}`);
    } else if (user === "rock") {
      return(`${result1}, ${computerWins}`);
    }
  } else if (computer === "scissors") {
    if (user === "rock") {
      return(`${result2}, ${userWins}`);
    } else if (user === "paper") {
      return (`${result3}, ${computerWins}`);
    }
  } else {
    return(`those are not valid choices`);
  }
}
