/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  var xlen = matrix.length;
  var ylen = matrix[0].length;

  var top = 0;
  var left = 0;
  var right = ylen - 1;
  var bottom = xlen - 1;
  var count = [0];

  var spiral = [];

  while (1) {
    
    if (traverseTop(matrix, top, left, right - 1, spiral, count, xlen * ylen)) {
        return spiral;
    }

    if (traverseRight(matrix, right, top, bottom - 1, spiral, count, xlen * ylen)) {
        return spiral;
    }

    if (traverseBottom(matrix, bottom, right, left + 1, spiral, count, xlen * ylen)) {
        return spiral;
    }

    if (traverseLeft(matrix, left, bottom, top + 1, spiral, count, xlen * ylen)) {
        return spiral;
    }

    top++;
    right--;
    bottom--;
    left++;

  }
};

var traverseTop = function(matrix, topIndex, start, end, outputArray, count, max) {
    for (var i = start; i <= end; i++) {
        outputArray.push(matrix[topIndex][i]);
        console.log('spiral is now', outputArray);
        count[0]++;
        if (count[0] >= max) {
            return true;
        }
    }
    return false;
}

var traverseRight = function(matrix, rightIndex, start, end, outputArray, count, max) {
    for (var i = start; i <= end; i++) {
        outputArray.push(matrix[i][rightIndex]);
        console.log('spiral is now', outputArray);
        count[0]++;
        if (count[0] >= max) {
            return true;
        }
    }
    return false;
}

var traverseBottom = function(matrix, bottomIndex, start, end, outputArray, count, max) {
    for (var i = start; i >= end; i--) {
        outputArray.push(matrix[bottomIndex][i]);
        console.log('spiral is now', outputArray);
        count[0]++;
        if (count[0] >= max) {
            return true;
        }
    }
    return false;
}

var traverseLeft = function(matrix, leftIndex, start, end, outputArray, count, max) {
    for (var i = start; i >= end; i--) {
        outputArray.push(matrix[i][leftIndex]);
        console.log('spiral is now', outputArray);
        count[0]++;
        if (count[0] >= max) {
            return true;
        }
    }
    return false;
}
