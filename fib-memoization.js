// Time: O(2^n)
// Space: O(n)
const dib = (n) => {
    if (n <= 1) return;
    dib(n - 1);
    dib(n - 1);
}


// Time: O(2^n)
// Space: O(n)
const fib = (n) =>  {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}


// Memoized version
// Use JS object, keys will be args to func, value will be the return value
const dynamicFib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(dynamicFib(45));
