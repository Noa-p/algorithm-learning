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
- [39. Combination Sum](https://leetcode.com/problems/combination-sum/)
- [216. Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)
- [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
