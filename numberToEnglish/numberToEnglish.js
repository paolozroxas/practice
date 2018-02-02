/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  0: '',
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};
var tensPlace = {
    0: '',
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
}

Number.prototype.toEnglish3 = function () {
  var str = JSON.stringify(this);
  var len = str.length;
  var digit = Number(str.substring(0,1));
  var tens = Math.pow(10, len-1);
//   console.log('calling on ', this);
//   console.log(str, digit, len, tens);

  if (len === 1) {
      //console.log('base case: ', numbersToWords[digit]);
      return numbersToWords[digit];
  } else if (len === 2) {
    //console.log('returning ', tensPlace[digit] + ' func(' + (this % Math.pow(10, len - 1)) + ')');
    return tensPlace[digit] + ' ' + Number.prototype.toEnglish3.call(this % (Math.pow(10, len - 1)));
  }
  else if (len > 1) {
      //console.log('returning ', numbersToWords[digit] + numbersToPlace[tens] + ' func(' + (this % Math.pow(10, len - 1)) + ')');
      return numbersToWords[digit] + ' ' + numbersToPlace[tens] + ' ' + Number.prototype.toEnglish3.call(this % (Math.pow(10, len - 1)));
  }
};

Number.prototype.toEnglish = function () {
     var str = JSON.stringify(this);
  var len = str.length;
  var digit = Number(str.substring(0,1));
  var tens = Math.pow(10, len-1);
  console.log('calling on ', this);
  console.log(str, digit, len, tens);

  var remainder = len % 3;
  var first = str.substring(0, remainder);
  var rest = str.substring(remainder,str.length);
  var multiples = (len - remainder) / 3;
  if (remainder === 0) {
      first = str.substring(0, 3);
      rest = str.substring(3,str.length);
  }

  if (len <= 3) {
      return this.toEnglish3();
  } else {
      return (Number(first)).toEnglish3() + (Number(rest)).toEnglish();
  }
}
