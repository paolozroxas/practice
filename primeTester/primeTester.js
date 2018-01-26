/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  for (var i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieveOld = function (start, end) {
  var ans = [];
  for (var i = start; i <= end; i++) {
    if (primeTester(i)) {
      ans.push(i);
    }
  }
  return ans;
};

//Eratosthenes Sieve
var primeSieve = function (start, end) {
  var range = {};
  for (var i = 2; i <= end; i++) {
    range[i] = true;
  }
  var p = 2;
  while (p <= end) {
    var oldP = p;
    console.log('p is ', p);
    for(var i = 2*p; i <= end; i = i + p) {
      range[i] = false;
      console.log('   removing ', i);
    }
    for (var i = p + 1; i <= end; i++) {
      if (range[i]) {
        p = i;
        break;
      }
    }
    if (p === oldP) {
      break;
    }
  }

  var ans = [];
  for (var i = start; i <= end; i++) {
    if (range[i]) {
      ans.push(i);
    }
  }
  return ans;
}
