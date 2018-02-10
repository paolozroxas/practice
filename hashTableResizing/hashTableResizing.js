/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1




//RESIZE DOESN'T WORK. PLS FIX





var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;

  result.resize = function(newSize) {
      var oldStorage = storage;
      var oldLimit = storageLimit;
      storage = [];
      storageLimit = newSize;
      for (var i = 0; i < oldStorage.length; i++) {
          if (oldStorage[i]) {
              for (var j = 0; j < oldStorage[i].length; j++) {
                let key = Object.keys(oldStorage[i][j])[0];
                this.insert(key, oldStorage[i][j][key]);
              }
          }
      }
      console.log('old storage was ', oldStorage);
      console.log('new storage is ', storage);
      console.log('old limit was ', oldLimit);
      console.log('new limit is ', storageLimit);
  };

  result.checkForResize = function() {
      var newLimit = storageLimit;
      if (size / storageLimit < 0.25 && storageLimit > 4) {
        var newLimit = storageLimit / 2;
      } else if (size / storageLimit > 0.75) {
        var newLimit = storageLimit * 2
      }
      if (storageLimit != newLimit) {
          resizing = true;
          this.resize(newLimit);
          resizing = false;
      }

  };
  
  result.insert = function(str, value) {
    if (!resizing) {
        this.checkForResize();
    }
    var key = getIndexBelowMaxForKey(str, storageLimit);
    var tuple = {};
    tuple[str] = value;
    if (!storage[key] || storage[key].length === 0) {
      storage[key] = [tuple];
      return;
    } else {
      //check str already in array
      for (var i = 0; i < storage[key].length; i++) {
        if (str in storage[key][i]) {
          storage[key][i] = tuple;
          size++;
          return;
        }
      }
      storage[key].push(tuple);
    }

  };

  result.retrieve = function(str) {
    console.log('storage is ', storage);
    var key = getIndexBelowMaxForKey(str, storageLimit);
    if (!storage[key]) {
      return;
    } else {
      for (var i = 0; i < storage[key].length; i++) {
        if (str in storage[key][i]) {
          return storage[key][i][str];
        }
      }
      return;
    }
  };

  result.remove = function(str) {
    this.checkForResize();
    console.log('storage is ', storage);
    var key = getIndexBelowMaxForKey(str, storageLimit);
    if (!storage[key]) {
      return;
    } else {
      for (var i = 0; i < storage[key].length; i++) {
        if (str in storage[key][i]) {
            var before = storage[key].slice(0, i);
            var after = storage[key].slice(i + 1, storage[key].length);
            var newArr = before.concat(after);
            storage[key] = newArr;
            size --;
            console.log('newArr is now ', newArr);
        }
      }
      return;
    }
  };

  return result;
};
