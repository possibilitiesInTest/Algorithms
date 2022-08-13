// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    //create cache
    const cache = {};

    // return func w. cached arg-responses
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }

    // call slowFib w. apply(this and args)
    const result = fn.apply(this, args);
    //in cached obj, at key args: store result
    cache[args] = result;
    //return result
    return result;
    }
}

function slowFib(n) {
    if(n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;


// function fib(n) {
//     const result = [0, 1];

//     for(let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }

//     return result[n];
// }


// function fib(n) {
//     if(n <  2) return n;
//     return fib(n - 1) + fib(n - 2);
// }