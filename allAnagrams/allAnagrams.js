/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
    var fullString = string;
    var fullStringArr = fullString.split('');

    var prepender = function(letters, combs) {
        var arr = [];
        for (var i = 0; i < combs.length; i++) {
            for (var j = 0; j < letters.length; j++) {
                arr.push(letters[j]+combs[i]);
            }
        }
        return arr;
    }
    
    var ans = fullStringArr;
    for (var i = 0; i < string.length - 1; i++) {
        ans = prepender(fullStringArr, ans);
    }
    return ans;

};

