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
  //memoized solution
  const cache = {};
  return function(...args){
    //assume  multiple arguments for reusability
    if (cache[args]){
      return cache[args];
    }
    //apply method - calls a function with a given 'this'
    //value and arguments provided as an array
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowfib(n) {
  if (n<2){
    return n;
  }
  return fib(n-1) + fib(n-2);
}

const fib = memoize(slowfib);

module.exports = slowfib;

/*
function fib(n) {
  //recursion solution
  if (n<2){
    return n;
  }
  return fib(n-1) + fib(n-2);
}
*/
