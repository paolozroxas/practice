/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/


var evenOccurrence = function(arr) {
  var storage = {};
  storage.counter = 0;

  for (var i = 0; i < arr.length; i++) {
    //add the element to storage
    if (arr[i] in storage) {
      storage[arr[i]]++;
    } else {
      storage[arr[i]] = 1;
      storage.counter++;
    }
  }

  for (var item in storage) {
    if (storage[item] % 2 !== 0) {
      delete storage[item];
      storage.counter--;
    }
  } //now you have only even occurences

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in storage) {
      return arr[i];
    }// end if in storage
  }
  return null;
};
