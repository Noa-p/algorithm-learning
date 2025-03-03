# 搜索（BFS、DFS、回溯）

## BFS
## DFS
## Backtracking
回溯是一种通过尝试选项和撤销选项，穷举所有可能的暴力搜索算法。

### 回溯问题的类型
回溯算法适用于解决这样的问题：
- 这个问题有多种可能解
- 这个问题可以拆解成子问题
- 子问题相互独立

主要分类：
- Decision Problems: a feasible solution
- Optimization Problems: the best solution
- Enumeration Problems: all possible feasible solutions

### 相关题目
#### 组合问题
> 叶子结点是解；


以Leetcode 77为例
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const comb = [];
    function backtracking (start) {
        if (comb.length == k) {
            res.push(comb);
            return;
        }
        // 剪枝
        for (let i=start; i <= n-(k-comb.length)+1; i++) {
            comb.push(i);
            backtracking(i+1);
            comb.pop();
        }
        return;
    }
    backtracing(1);
    return res;
}
```
- [77. Combinations](https://leetcode.com/problems/combinations/)
- [39. Combination Sum](https://leetcode.com/problems/combination-sum/) `选项可重复`
- [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)  `去重`
- [216. Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)
- [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

#### 分割问题
> 叶子结点是解；path记录的相当于是分割的位置；
- [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
- [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)

#### 子集问题
> 所有树结点都是解；
- [78. Subsets](https://leetcode.com/problems/subsets/)
- [90. Subsets II](https://leetcode.com/problems/subsets-ii/)
- [491. Non-decreasing Subsequences](https://leetcode.com/problems/non-decreasing-subsequences/)

#### 排列问题
> 叶子结点是解；剩余元素均可继续选择；
- [46. Permutations](https://leetcode.com/problems/permutations/)
- [47. Permutations II](https://leetcode.com/problems/permutations-ii/)

#### 棋盘问题
- [51. N-Queens](https://leetcode.com/problems/n-queens/)
- [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)

#### 其他
- [332. Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
