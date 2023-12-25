// Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array. 

// You may reuse elements of `wordBank` as many times as needed. 



/*
    Bruteforce
    m = target.length
    n = wordBank.length
    Time: O(m * n^m)
    Space: O(m^2)
*/
const countConstruct = (target, wordBank) => {
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWaysForRest = countConstruct(suffix, wordBank);
            totalCount += numWaysForRest;
        }
    }

    return totalCount;
};


console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//     "eeeeeee",
// ])); // 0



/**
 * Memoized
 * m = target.length
 * n = wordBank.length
 * Time: O(n * m^2)
 * Space: O(m^2)
 */
const dynamicCountConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWaysForRest = dynamicCountConstruct(suffix, wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
};


console.log(dynamicCountConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(dynamicCountConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(dynamicCountConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(dynamicCountConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(dynamicCountConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
])); // 0