/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1) {

  var duplicateCount = {};
  for (var i = 0; i < string1.length; i++) {
    duplicateCount[string1[i]] = 1;
  }

  for (var i = 1; i < arguments.length; i++) {
    var string = arguments[i];
    for (var j = 0; j < string.length; j++) {
      if (duplicateCount.hasOwnProperty(string[j])) {
        duplicateCount[string[j]] = i + 1;
      }
    }
  }

  var result = '';
  for (var i = 0; i < string1.length; i++) {
    if (duplicateCount[string1[i]] === arguments.length) {
      result += string1[i];
    }
  }
  return result;
};
