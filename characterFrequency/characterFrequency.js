/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
    var obj = {};
    for (var i = 0; i < string.length; i++) {
        if (obj.hasOwnProperty(string[i])){
            obj[string[i]]++;
        } else {
            obj[string[i]] = 1;
        }
    }
//now i have an object with all letters, and the counts;
    var array = [];
    for (var letter in obj) {
        var arr = [letter, obj[letter]];
        array.push(arr);
    }

    array.sort(function(x,y) {
        if (x[1] > y[1]) {
            return -1;
        } else {
            return 1;
        }
    });
    
    var ans = [];
    for (var i = array[0][1]; i >= 1; i--) {
        console.log('i is ', i);
        var arr1 = [];
        for (var j = 0; j < array.length; j++) {
            if (array[j][1] === i) {
                arr1.push(array[j]);
            }
        }
        console.log('arr1 before sort is ', arr1);
        arr1.sort(function(x,y) {
            if (x[0] < y[0]) {
                return -1;
            } else {
                return 1;
            }
        });
        console.log('arr1 after sort is ', arr1);
        for (var q = 0; q < arr1.length; q++) {
            ans.push(arr1[q]);
        }
        console.log('ans after concat is ', ans);
    }
    console.log('ans is ', ans);
    return ans;
};