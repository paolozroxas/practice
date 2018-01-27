/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};

var insertionSort = function(array
) {
  // Your code goes here. Feel free to add helper functions if needed.
  return array;
};

var insertionHelper = function(array) {
  //takes in an object with keys equal to comparison numbers and values equal to order
  //{1:undef, 2:undef, 3:1, 3,2}
  var arr = array.slice(0, array.length);
  var el = array[array.length - 1];
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < el) {
      newArr.push(arr[i]);
    } else if (arr[i] === el)
  }



  // var lastIndex = array.length - 1;
  // var newIndex = lastIndex;
  //
  // for (var i = 0; i < array.length -1 ; i++) {
  //   if (array[lastIndex].value === array[i].value) {
  //     if (array[lastIndex].order <= array[i].order){
  //       newIndex = i;
  //       console.log('case 1')
  //     } else {
  //       newIndex = i + 1;
  //       console.log('case 2')
  //     }
  //     break;
  //   } else if (array[lastIndex].value < array[i].value) {
  //     console.log('case 3')
  //     newIndex = i;
  //     break;
  //   }
  // }
  //
  // if (newIndex === lastIndex) {
  //   return array;
  // }
  //
  // console.log('new index is ', newIndex);
  // console.log('last index is ', lastIndex);
  //
  // var ans = [];
  // var leftArr = array.slice(0, newIndex);
  // console.log('leftArr is ', leftArr)
  // var rightArr = array.slice(newIndex + 1, array.length - 1);
  // console.log('rightArr is ', rightArr)
  // leftArr.push(array[lastIndex]);
  // rightArr.unshift(array[newIndex]);
  // ans = leftArr.concat(rightArr);
  // return ans;
}
