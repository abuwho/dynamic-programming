## Memoization Recipe

1. Make it work (Bruteforce, could be slow, but that's okay)
    - visualize the problem as a tree
    - implement the tree using recursion
    - test it (at least for small examples)

2. Make it efficient
    - add a memo object/hashmap
    - save the return values for the unique set of arguments in the memo
    - add a base case to return memo values (to see if it has been calculated before)
    - store return values into the memo before returning
