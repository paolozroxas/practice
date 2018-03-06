/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
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
  var storageLimit = 1000;

  result.insert = function(key, val) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [key, val, null];
    } else {
      var ptr = storage[index];
      while (ptr[2] !== null) {
        if (ptr[0] === key) {
          ptr[1] = val;
          return;
        }
        ptr = ptr[2];
      }

      if (ptr[0] === key) {
        ptr[1] = val;
        return;
      }

      ptr[2] = [key, val, null];
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index] === undefined) {
      return;
    } else {
      var ptr = storage[index];
      while (ptr[2] !== null) {
        if (ptr[0] === key) {
          return ptr[1];
        }
        ptr = ptr[2];
      }
      if (ptr[0] === key) {
        return ptr[1];
      }
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index] === undefined) {
      return;
    } else {
        var depth = 1;
        var ptr = storage[index];
        while(ptr[2] !== null) {
            if (ptr[0] === key) {
                if (depth === 1) {
                    storage[index] = ptr[2];
                    return;
                } else if (depth > 1) {
                    var next = ptr[2];
                    prev[2] = next;
                    return;
                }
            }
            var prev = ptr;
            ptr = ptr[2];
            depth++;
        }
        if (ptr[0] === key) {
            if (depth === 1) {
                storage[index] = undefined;
                return;
            } else {
                prev[2] = null;
                return;
            }
        }
    }
  };


  result.printStorage = function() {
      console.log('storage:', storage);
  }

  return result;
};


//tests
// var ht = makeHashTable();
// ht.insert('abc', 'how are you')
// ht.insert('cba', 'i am fine')
// ht.insert('boolaboola', 'go bulldogs')
// console.log(ht.retrieve('abc'))
// console.log(ht.retrieve('cba'))
// console.log(ht.retrieve('boolaboola'))
// ht.remove('cba')
// console.log(ht.retrieve('cba'))
// ht.printStorage();