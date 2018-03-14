/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var storage = {};
  for (var i = 0; i < string.length; i++) {
    if (!storage.hasOwnProperty(string[i])) {
      storage[string[i]] = { count: 1, order: i };
    } else {
      storage[string[i]].count++;
    }
  }

  var earliest = { letter: null, order: string.length };
  for (var letter in storage) {
    if (storage[letter].count === 1) {
      if (earliest.order > storage[letter].order) {
        earliest.letter = letter;
        earliest.order = storage[letter].order;
      }
    }
  }

  return earliest.letter;
};
