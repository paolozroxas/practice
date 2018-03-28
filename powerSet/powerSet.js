/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */


 //STILL INCOMPLETE: please refactor for cases where word is not length 4.

var powerSet = function(str) {
  var result = [];
  for (var i = 0; i < 16; i++) {
    var bin = toBinary(i);
    var letters = bin.map(function(value, index) {
      return value ? str[index] : '';
    });
    result.push(letters.join(''));
  }
  return result;

};

var toBinary = function(num) {
  var curr = num;
  var bin = [0, 0, 0, 0];
  for (var i = 0; i < 4; i++) {
    var pow = 3 - i;
    if (curr >= Math.pow(2, pow)) {
      bin[i] = 1;
      curr = curr % Math.pow(2, pow);
    }
  }
  return bin;
}