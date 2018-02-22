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

var spiralTraversal = function(matrix, spiral) {
  //If no spiral output array, create it. This is the first function call.
  if (spiral === undefined) {
    spiral = [];
  }
  //If no matrix, assume user error or all elements already added to
  //spiral output array. Return spiral.
  if (matrix === undefined || matrix.length === 0) {
    return spiral;
  }
  
  //matrix dimensions
  var xlen = matrix.length;
  var ylen = matrix[0].length;

  //determines how layers will be added in traversals
  var params = {};
  params.top = 0;
  params.left = 0;
  params.right = ylen - 1;
  params.bottom = xlen - 1;
  
  //Base cases:
  if (xlen === 1) {
    for (var i = 0; i < ylen; i++) {
      spiral.push(matrix[0][i]);
    }
    return spiral;
  } else if (ylen === 1) {
    for (var i = 0; i < xlen; i++) {
      spiral.push(matrix[i][0]);
    }
    return spiral;
  }

  //Recursive Case:
  //adds outermost elements to spiral, then calls spiralTraversal on peeled matrix
  else if (xlen * ylen >= 4) {
    traversals.top(matrix, params.top, params.left, params.right - 1, spiral);

    traversals.right(matrix, params.right, params.top, params.bottom - 1, spiral);

    traversals.bottom(matrix, params.bottom, params.right, params.left + 1, spiral);

    traversals.left(matrix, params.left, params.bottom, params.top + 1, spiral);

    params.top++;
    params.left++
    params.right--;
    params.bottom--;

    return spiralTraversal(peel(matrix), spiral);
  }
  

};

//Add array elemments from either top, right, bottom, left of matrix
var traversals = {
  top: function(matrix, topIndex, start, end, outputArray) {
    for (var i = start; i <= end; i++) {
      outputArray.push(matrix[topIndex][i]);
      console.log('spiral is now', outputArray);
    }
  },
  right: function(matrix, rightIndex, start, end, outputArray) {
    for (var i = start; i <= end; i++) {
      outputArray.push(matrix[i][rightIndex]);
      console.log('spiral is now', outputArray);
    }
  },
  bottom: function(matrix, bottomIndex, start, end, outputArray) {
    for (var i = start; i >= end; i--) {
      outputArray.push(matrix[bottomIndex][i]);
      console.log('spiral is now', outputArray);
    }
  },
  left: function(matrix, leftIndex, start, end, outputArray) {
    for (var i = start; i >= end; i--) {
      outputArray.push(matrix[i][leftIndex]);
      console.log('spiral is now', outputArray);
    }
  }
};

//removes outer layer of matrix
var peel = function(matrix) {
  //assume matrix has a center

  //create copy of matrix
  var result = matrix.slice();

  //cleave top and bottom
  result = result.slice(1, result.length - 1);
  
  //cleave sides
  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].slice(1, result[i].length - 1);
  }

  return result;
}