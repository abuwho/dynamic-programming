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


/**
 * m = target.length
 * n = wordBank.length
 * Time: O(n^m)
 * Space: O(n^m)
 */
const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);

    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subarray => [...subarray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }

    return table[target.length];
};



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
console.log(allConstruct("eeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
])); // []
// For a long target string, memory limit could be exceeded 😵‍💫