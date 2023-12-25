// Write a function `howSum(targetSum, numbers)` that takes a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination of elements that add up to exactly the targetSum. 
// If there is no combination that adds up to the targetSum, then return null.

// If there are multiple combinations possible, you may return any single one. 

// howSum(7, [5, 3, 4, 7]) -> [3, 4] or [7]
// howSum(8, [2, 3, 5]) -> [2, 2, 2, 2] or [3, 5]
// howSum(7, [2, 4]) -> null
// howSum(0, [1, 2, 3]) -> []



/**
 * m = targetSum
 * n = numbers.length
 * Time: O(m^2 * n)
 * Space: O(m^2)
 */
const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);

    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (i + num < table.length) {
                    table[i + num] = [...table[i], num];
                }
            }
        }
    }
    
    return table[targetSum];
}



console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null