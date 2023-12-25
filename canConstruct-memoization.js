// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings. 

// The function should return a boolean indicating whether of not the `target` can be constructed by concatenating elements of the `wordBank` array. 

// You may reuse elements of `wordBank` as many times as needed. 

// canConstruct(abcdef, [ab, abc, cd, def, abcd]) -> true
// canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) -> false
// canConstruct('', [cat, dog, mouse]) -> true



/*
    Bruteforce
    m = target.length
    n = wordBank.length
    Time: O(m * n^m)
    Space: O(m^2)
*/
const canConstruct = (target, wordBank) => {
    if (target === '') {
        return true;
    }

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }

    return false;
};


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//     "eeeeeee",
// ])); // false




/**
 * Memoized
 * m = target.length
 * n = wordBank.length
 * Time: O(n * m^2)
 * Space: O(m^2)
 */

const dynamicCanConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (dynamicCanConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
};



console.log(dynamicCanConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(dynamicCanConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(dynamicCanConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(dynamicCanConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
])); // false
