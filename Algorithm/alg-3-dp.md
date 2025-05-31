# Dynamic Programming
> 前序知识：记忆化递归（Memoization）。这其实也属于DP的一种方式，不过是一种自顶向下的技巧。在递归计算中，将计算过的结果储存下来，下一次再遇到相同的子问题，直接从存储中返回结果即可。
>
> 本文主要介绍自下向上的DP技巧（Tabulation），也就是利用DP数组求解问题的技巧。

动态规划是一种解决问题的算法。通常是将一个复杂的问题拆分成若干子问题进行求解，并通过迭代和记录子问题的结果从而避免重复计算，最终得到复杂问题的结果。

## 基本概念
- 最优子结构：决定了具体如何解决
- 子问题重叠：记忆
- 无后效性：决定了是否可以用动态规划来解决
- 子问题必须是离散的，即子问题之间没有相互依赖。比如说一个子问题solved之后会影响其他子问题的结果。

## 基础问题
- [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
- [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)
- [62. Unique Paths](https://leetcode.com/problems/unique-paths/)
- [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)
- [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
- Rod Cutting

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

## 子集问题
- [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) `不连续` `组合` `求长度`
- [674. Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/) `连续` `只需要跟前一个值比较` `求长度`
- [718. Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) `连续` `比较` `求长度`
- [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) `不连续` `比较` `值不相等时，需要考虑当前值取或不取的情况` `求长度`
- [1035. Uncrossed Lines](https://leetcode.com/problems/uncrossed-lines/) `与1143是同一个问题` `求长度`
- [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) `连续` `求长度`
- [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/) `不连续` `可转换为1143`
- [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) `不连续` `值不相等时，需要考虑s当前值取或不取的情况` `求满足条件的个数`
- [583. Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) `求操作步数`
- [72. Edit Distance](https://leetcode.com/problems/edit-distance/) `求操作步数`
- [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) `回文子串`
- [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
- [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
- [97. Interleaving String](https://leetcode.com/problems/interleaving-string/) `🌟`
- [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses) `连续` `求长度`

## Matrix
- [120. Triangle](https://leetcode.com/problems/triangle/)
- [221. Maximal Square](https://leetcode.com/problems/maximal-square/)

## 状态压缩
> 有的DP数组可以压缩以减少空间复杂度
#### [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
压缩方法：

