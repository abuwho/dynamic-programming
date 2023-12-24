// Say that you are a traveler on a 2D grid. 
// You begin in the top-left corner and your goal is to travel to the bottom-right corner. 
// You may only move down or right. 

// In how many ways can you travel to the goal on a grid with dimensions m * n?

// Write a function `gridTraveler(m, n)` that calculates this. 


// Time: 2^(m+n)
// Space: O(m+n)
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6


/* 
-> Using a memo (JS Object) which looks like {"arg1,arg2" = returnVal}
-> Time: O(m * n)
-> Space: O(m + n)
*/ 
const dynamicGridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;

    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = dynamicGridTraveler(m - 1, n, memo) + dynamicGridTraveler(m, n - 1, memo);
    return memo[key];
}

console.log(dynamicGridTraveler(1, 1)); // 1
console.log(dynamicGridTraveler(2, 3)); // 3
console.log(dynamicGridTraveler(3, 2)); // 3
console.log(dynamicGridTraveler(3, 3)); // 6
console.log(dynamicGridTraveler(18, 18)); // 2333606220