// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    //console log 1 to n, inclusive
    for (var i = 1; i <= n; i++) {
        //multiple of 15 print "fizzbuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
            //multiple of 3 print "fizz"
        } else if (i % 3 === 0) {
            console.log("fizz");
            //multiple of 5 print "buzz"
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i); 
        }
    }
}

module.exports = fizzBuzz;