var longestPalindrome = function (string) {
  var palindromes = {};

  //iterates through all substrings.
  for (var i = 0; i < string.length; i++) {
    for (var j = 1; j <= string.length; j++) {
        if (j > i) {
            //ask if substring is a palindrome. if yes,
            //then add to palindromes object
            var substr = string.slice(i, j);
            if (isPalindrome(substr)) {
                palindromes[substr] = true;
            }
        }
    }
  }//end of outer for loop
  
  var longest = '';
  for (var pal in palindromes) {
      if (pal.length > longest.length) {
          longest = pal;
      }
  }

  return longest;

};

//is the string a palindrome?
var isPalindrome = function(string) {
    for (var i = 0; i < string.length / 2; i++) {
        var j = string.length - 1 - i;
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
}