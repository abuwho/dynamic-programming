// Write a function `howSum(targetSum, numbers)` that takes a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination of elements that add up to exactly the targetSum. 
// If there is no combination that adds up to the targetSum, then return null.

// If there are multiple combinations possible, you may return any single one. 

// howSum(7, [5, 3, 4, 7]) -> [3, 4] or [7]
// howSum(8, [2, 3, 5]) -> [2, 2, 2, 2] or [3, 5]
// howSum(7, [2, 4]) -> null
// howSum(0, [1, 2, 3]) -> []


/**
 * Bruteforce
 * m = target sum
 * n = numbers.length
 * Time: O(m * (n^m))
 * Space: O(m)
 */
const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);

        if (remainderResult !== null) {
            return [ ...remainderResult, num ];
        }
    }

    return null;
};


console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
// console.log(howSum(300, [7, 14])); // null


/** 
 * m = target sum
 * n = numbers.length
 * 
 * Time: O(n * m^2)
 * Space: O(m^2)
 */
const dynamicHowSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = dynamicHowSum(remainder, numbers, memo);

        if (remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, num ];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return memo[targetSum];
};

console.log(dynamicHowSum(7, [2, 3])); // [3, 2, 2]
console.log(dynamicHowSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(dynamicHowSum(7, [2, 4])); // null
console.log(dynamicHowSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(dynamicHowSum(300, [7, 14])); // null