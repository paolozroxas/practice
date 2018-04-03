/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
 var leftBrackets = {
  '(': ')',
  '[': ']',
  '{': '}'
 };
 var rightBrackets = {
  ')': true,
  ']': true,
  '}': true
 };

var balancedParens = function(input) {
  console.log('calling on', input)
  var stack = [];
  for (var i = 0; i < input.length; i++) {
    if (leftBrackets.hasOwnProperty(input[i])) {
      stack.push(input[i]);
    } else if (rightBrackets.hasOwnProperty(input[i])) {
      var top = stack[stack.length - 1];
      if (leftBrackets[top] === input[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};


