/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  board.makeCopy = function() {
    var newBoard = makeBoard(n);
    for (var i = 0; i < n; i++) {
      for(var j = 0; j < n; j++) {
        newBoard[i][j] = this[i][j];
      }
    }
    return newBoard;
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  if (!board) {
      board = makeBoard(n);
  }
  if (!i) {
      i = 0;
  }
  if (!j) {
      j= 0;
  }
  
  if (i === n - 1 && j === n - 1) {
    return 1;
  }

  board.togglePiece(i, j);

  var validChoices = [];
  if (i - 1 >= 0 && !board.hasBeenVisited(i - 1, j)) {
    validChoices.push([i - 1, j]);
  }
  if (j + 1 < n && !board.hasBeenVisited(i, j + 1)) {
    validChoices.push([i, j + 1]);
  }
  if (i + 1 < n && !board.hasBeenVisited(i + 1, j)) {
    validChoices.push([i + 1, j]);
  }
  if (j - 1 >= 0 && !board.hasBeenVisited(i, j - 1)) {
    validChoices.push([i, j - 1]);
  }

  if (validChoices.length === 0) {
    return 0;
  }

  if (validChoices.length === 1) {
      return robotPaths(n, board.makeCopy(), validChoices[0][0], validChoices[0][1]);
  } else {
      return validChoices.reduce(function(acc, el) { // each element is [i, j]
        return acc + robotPaths(n, board.makeCopy(), el[0], el[1]);
    }, 0);
  }

};

//Tests:
//console.log('number of paths:', robotPaths(6));