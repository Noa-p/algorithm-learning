# Greedy
通过求解局部最优从而达到全局最优的算法

## Intuition
- 问题可以拆分成若干子问题
- 找出合适的贪心策略
- 求解子问题的最优解
- 将局部最优解堆叠成全局最优解

## 相关题目
- [455. Assign Cookies](https://leetcode.com/problems/assign-cookies/) `策略：最大饼干满足最大胃口的孩子`
- [376. Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/) `策略：删除单调坡度上的元素`
- [452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) `策略：当前区间不与前一个区间重合时计数+1。如果前两个区间重合，比较的区间应该是这两个区间重叠的部分`
- [435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
- [55. Jump Game](https://leetcode.com/problems/jump-game/)
- [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/)
- [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
- [135. Candy](https://leetcode.com/problems/candy/)
- [968. Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) `策略：根据子节点情况确定当前节点是否要放置摄像头`
