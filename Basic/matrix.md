# Matrix
Matrix Data Structure is a two-dimensional array arranged in rows and columns. It is commonly used to represent mathematical matrices and is fundamental in various fields like mathematics, computer graphics, and data processing. Matrices allow for efficient storage and manipulation of data in a structured format.[1]

## Basic Operations
> - Access elements of Matrix
> - Traversal in a Matrix
> - Searching in a Matrix
> - [Sorting a Matrix](#sorting-a-matrix)

### Sorting a Matrix
There are 2 ways to do that:
1. Sort the matrix row-wise
2. Sort the matrix column-wise
#### 1. Sort the matrix row-wise
Easy. Traverse the Matrix and sort each row.
#### 2. Sort the matrix column-wise
Approach:
-  Traverse the matrix
-  Find the transpose of the given matrix `mat[][]` and store it in a 2D verctor, `tr[][]`
-  Traverse the rows of `tr[][]`, sort each row of it
-  Store the transpose of `tr[][]` in `mat[][]`
```javascript

```

## Relative Problems
> - [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
> - [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
> - [48. Rotate Image](https://leetcode.com/problems/rotate-image/)
> - [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)

### [48. Rotate Image](https://leetcode.com/problems/rotate-image/)
#### Intuitive
#### Code
```javascript

```
#### Complexity
- Time Complexity:
- Space Complexity:

# References
[1] [Matrix Data Structure](https://www.geeksforgeeks.org/matrix/)

