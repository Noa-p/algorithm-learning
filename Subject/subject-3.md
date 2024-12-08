# 滑动窗口
滑动窗口是一种解题思路与技巧，通常用来解决连续问题，比如看到题目中有关于subarray或者substring，就可以考虑使用此技巧。从类型上来说主要有：
- 固定窗口大小
- 窗口大小不固定，求解最大的满足条件的窗口
- 窗口大小不固定，求解最小的满足条件的窗口

## [209.Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/)
以该题为例，来看看这类题目的解法。
```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    // subarray
    let sum = 0;
    let p1 = 0, p2 = 0;
    while (p2 < nums.length) {
        sum += nums[p2];                      // update window info
        while (sum >= target) {               // If window is not valid
            if (p2 - p1 + 1 < minLen) {       // Expand or shrink window
                minLen = p2 - p1 + 1;
            }
            sum -= nums[p1];
            p1++;
        }
        p2++;
    }

    return minLen !== Infinity ? minLen : 0;
};
```
时间复杂度：O(N)

空间复杂度：O(1)

## 其他相关题目
