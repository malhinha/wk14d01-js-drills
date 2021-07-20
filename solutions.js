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
