// Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return a 2D array containing all of the ways that the `target` can be constructed by concatenating elements of the `wordBank` array. 

// You may reuse elements of `wordBank` as many times as needed. 

// For example, 
// allConstruct(purple, [purp, p, ur, le, purpl]) 
// returns
// [
//     [purp, le],
//     [purpl, e],
// ]




/*
m = target.length
n = wordBank.length
Time: O(n^m)
Space: O(m)
*/
const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];

    let result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);

            const suffixWays = allConstruct(suffix, wordBank);

            const targetWays = suffixWays.map(way => [word, ...way]);

            result.push(...targetWays);

        }
    }

    return result;
}



console.log("Bruteforce");
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); 
/* 
[
    ["purp", "le"],
    ["purpl", "e"],
]
 */
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
/* 
[
    ["ab", "cd", "ef"],
    ["ab", "c", "def"],
    ["abc", "def"],
    ["abcd", "ef"]
]
*/
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // []
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//     "eeeeeee",
// ])); // []




/*
m = target.length
n = wordBank.length
Time: O(n^m)
Space: O(m)
*/
const dynamicAllConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if (target === '') return [[]];

    let result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);

            const suffixWays = dynamicAllConstruct(suffix, wordBank, memo);

            const targetWays = suffixWays.map(way => [word, ...way]);

            result.push(...targetWays);

        }
    }

    memo[target] = result;
    return result;
}


console.log("Memoized")
console.log(dynamicAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); 
/* 
[
    ["purp", "le"],
    ["purpl", "e"],
]
 */
console.log(dynamicAllConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
/* 
[
    ["ab", "cd", "ef"],
    ["ab", "c", "def"],
    ["abc", "def"],
    ["abcd", "ef"]
]
*/
console.log(dynamicAllConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // []
console.log(dynamicAllConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
])); // []