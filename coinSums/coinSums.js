/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var coinValues = [200,100,50,20,10,5,2,1];
var makeChange = function(total) {
	var count = {count: 0};
	makeChangeHelper(total, total, coinValues, count);
	return count.count;

};
var makeChangeHelper = function(total, val, coins, count) {
	if (coins.length === 1) {
		count.count++;
	} else {
		for (var i  = 0; i < coins.length; i++) {
			var coin = coins[i];
			var times = 0;
			while (coin*times <= val) {
				times++
			} //now you have times.
			if (coin*times > val) {
				break;
			}
			while(times >= 0) {
				if (coin*times === val) {
					count.count++;
				} else {
					makeChangeHelper(total, val - coin*times, coins.slice(1), count);
				}
				times--;
			}
			
		}
	}

};

