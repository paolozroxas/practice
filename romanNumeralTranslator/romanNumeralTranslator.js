
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return null;
  } else if (romanNumeral.length === 0) {
    return 0;
  } else if (romanNumeral.length === 1) {
    return DIGIT_VALUES[romanNumeral];
  }

  var sum = 0;

  for (var i = 0; i < romanNumeral.length - 1; i++) {
    //console.log('i is', i);
    var addend = DIGIT_VALUES[romanNumeral[i]];
    var nextAddend = DIGIT_VALUES[romanNumeral[i + 1]];
    if(addend < nextAddend) {
      //console.log('subtracting');
      addend = nextAddend - addend;
      i++;
    }
    if (i === romanNumeral.length -2) {
      //console.log('last index');
      nextAddend = DIGIT_VALUES[romanNumeral[i + 1]];
      addend += nextAddend;
    }
    //console.log('addend is', addend);
    sum += addend;
  }

  return sum;

};


// translateRomanNumeral('MCMLIV').should.eql(1954);
// translateRomanNumeral('MCMXC').should.eql(1990);
// translateRomanNumeral('MMVIII').should.eql(2008);
// translateRomanNumeral('MDCCCCX').should.eql(1910);
// translateRomanNumeral('MCMX').should.eql(1910);