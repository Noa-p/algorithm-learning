# 前缀和
- 一维前缀和
- 二维前缀和

## 概述
前缀和是一种重要的预处理，可以理解为“数列的前n项的和”。例如：
```javascript
// number array
let nums = [1,2,3,4,5,6];

// prefix sum array of nums
let pre = [1,3,6,10,15,21];

```
前缀和的特性：
- `pre[i] = pre[i-1] + nums[i]`
- `SUM(nums[l, r]) = pre[r] - pre[l], l > 0`
- `SUM(nums[l, r]) = pre[r], l = 0`

了解了前缀和的特性，重要的就是如何利用前缀和来帮助我们解决问题。

## 母题
### Q1 Find the count of continuous subarray of a given array
#### Intuition
```math
$$
count = \sum_{i=0}^n count(i) = \sum_{i=0}^n (i + 1), n = array.length - 1
$$
```
So, a given array can be presented as `[1, 2, ..., (i+1), ..., n]`. And, `pre = [1, 3, ..., ans]`.
#### Code
```javascript
function countSubArray(nums) {
  let ans = 0;
  let pre = 0;
  for (_ of nums) {
    pre += 1;
    ans += 1;
  }
  return ans;
}
```
Time complexity: O(N)

Space complexity: O(1)

### Q2 Find the count of continuous subarray that adjacent diff = 1 of a given array
#### Intuition
Add checking adjacent diff based on Q1.
#### Code
```javascript
function countSubArray(nums) {
  let ans = 0;
  let pre = 0;
  for (let i=1; i<nums.length; i++) {
    if (nums[i] - nums[i-1] === 1) {
      pre += 1;
    } else {
      pre = 0;
    }

    ans += pre;
  }
  return ans;
}
```
Time complexity: O(N)

Space complexity: O(1)

### Q3 ... that all items <= k ...
#### Intuition
- `atMostK(nums, k)`
#### Code
```javascript
function countSubArray(nums, k) {
  let ans = 0;
  let pre = 0;
  for (let i=1; i<nums.length; i++) {
    if (nums[i] < k) {
      pre += 1;
    } else {
      pre = 0;
    }

    ans += pre;
  }
  return ans;
}
```
Time complexity: O(N)

Space complexity: O(1)
### Q4 ... that maximum = k ...
#### Intuition
- `exactK(nums, k) = atMostK(nums, k) - atMostK(nums, k - 1)`

### Q5 ... that k2 < maximum < k2 ...
#### Intuition
- `betweenK(nums, k1, k2) = atMostK(nums, k1) - atMostK(nums, k2)`

