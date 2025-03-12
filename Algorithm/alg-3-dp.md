# Dynamic Programming
> 前序知识：记忆化递归

## 基本概念
- 最优子结构：决定了具体如何解决
- 无后效性：决定了是否可以用动态规划来解决
- 子问题重叠：记忆

## 基础问题
- [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
- [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)
- [62. Unique Paths](https://leetcode.com/problems/unique-paths/)
- [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)
- [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)

#### [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
##### Intuition
- 使用`dp`数组记录可以构造的BST的数量，`dp[i]`表示`i`个节点可以构造的BST的数量
- 递推公式：$`dp[i] = \sum_{j=1}^i (dp[j-1] * dp[i-j])`$
- 初始化：`dp[0] = 1, dp[1] = 1`
##### Code
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n === 0 || n === 1) return 1;
    const dp = new Array(n+1).fill(0);
    dp[0] = 1, dp[1] = 1;
    for (let i=2; i<=n; i++) {
        for (let j=1; j<=i; j++) {
            dp[i] += dp[j-1] * dp[i-j];
        }
    }
    return dp[n];
};
```
##### Complexity
- Time Complexity: `O(n^2)`
- Space Complexity: `O(n)`

## 背包问题
