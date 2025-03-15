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
### 01背包
> 纯粹01背包问题：有n个物品，每个物品有其重量和价值，每个物品只能取一次，给定固定称重大小的背包，问怎么装使得背包的价值最大
> 
> 代码特点：
> 1. 二维dp数组中，无所谓遍历顺序
> 2. 一维dp数组中，只能先遍历物品，再遍历背包，且遍历背包时应该倒叙


- [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) `分割数组`
- [1049. Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) `分割数组`
- [494. Target Sum](https://leetcode.com/problems/target-sum/) `分割数组`
- [474. Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) `两个维度m, n`

### 完全背包
> 纯粹完全背包问题：有n个物品，每个物品有其重量和价值，每个物品可以取无限次，给定固定称重大小的背包，问怎么装使得背包的价值最大
> 
> 代码特点：
> 1. 无所谓遍历顺序，且遍历背包时应该正序
> 2. 但如果题目问装满背包有多少种方法，应该考虑求组合还是排列。如果求组合，应该先遍历物品，再遍历背包；如果求排列，则先遍历背包，再遍历物品

- [518. Coin Change II](https://leetcode.com/problems/coin-change-ii/)
- [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
- [322. Coin Change](https://leetcode.com/problems/coin-change/)
- [279. Perfect Squares](https://leetcode.com/problems/perfect-squares/)
- [139. Word Break](https://leetcode.com/problems/word-break/) `🌟`

## 打家劫舍
- [198. House Robber](https://leetcode.com/problems/house-robber/)
- [213. House Robber II](https://leetcode.com/problems/house-robber-ii/) `环形`
- [337. House Robber III](https://leetcode.com/problems/house-robber-iii/) `树形DP`

## 买卖股票
- [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
- [188. Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
