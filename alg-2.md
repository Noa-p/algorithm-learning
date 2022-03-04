# 排序

| 名称 | 平均时间复杂度 | 最好情况 | 最坏情况 | 排序方式 | 稳定性 | 说明 | 标签
| :---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | 
| 冒泡排序 | O(n^2) | O(n) | O(n^2) | in-place | 稳定 | 
| 选择排序 | O(n^2) | O(n^2) | O(n^2) | in-place | 不稳定 | 
| 插入排序 | O(n^2) | O(n) | O(n^2) | in-place | 稳定 | 内循环是紧密的，对小规模输入<br/>来说是一个快速的原地排序算法 | `比较排序`
| 希尔排序 | O(nlg^2n) | O(nlg^2n) | O(n^2) | in-place | 不稳定 | 
| 归并排序 | O(nlgn) | O(nlgn) | O(nlgn) | out-place | 稳定 | 有较好的渐进运行时间，但<br/>其中的MERGE程序不在原地排序 | `比较排序`
| 堆排序 | - | - | O(nlgn) | in-place |  |  | `比较排序`
| 快速排序 | O(nlgn) | O(nlgn) | O(n^2) | in-place | 不稳定 | 实际中常优于堆排序算法。<br/>紧凑，运行时间中隐含的常数因子<br/>就很小。对于大输入的排序来说，<br/>这是一个很常用的算法。| `比较排序`

## 冒泡排序
冒泡排序算法：
- 比较相邻的元素，如果它们顺序错误，就交换过来
- 对每一对相邻元素做此操作，每一轮遍历结束后，最后的数会是最大的数
- 针对每一个元素重复上述步骤，每次除去最后一个数

代码：
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var bubbleSort = function(nums) {
    const n = nums.length
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<n-i-1; j++) {
            if (nums[j] > nums[j+1]) {
                const temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums
};
```
时间复杂度：O(n^2)

空间复杂度：O(1)

## 选择排序
选择排序算法：
- 遍历数组找到最小值，放到当前遍历数组的开头（原地），然后在剩下的元素中找最小值，依此类推
- 新建一个数组作为res（非原地）

代码：
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var selectionSort = function(nums) {
    const n = nums.length
    for (let i=0; i<n; i++) {
        for (let j=i; j<n; j++) {
            if (nums[j] < nums[i]) {
                swap(nums, i, j)
            }
        }
    }
    return nums
};

function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
```
时间复杂度：O(n^2)

空间复杂度：O(1)

## 插入排序
插入排序算法：
- 遍历数组，每次循环[0, cur)区间是顺序的，我们需要将cur插入到[0, cur]区间中，cur++
- 插入方式为，遍历[0, cur)，如果当前值比cur值大，向后移动一位；否则，退出循环，将cur值插入

代码：
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const n = nums.length
    for (let i=1; i<n; i++) {
        const cur = nums[i]
        let cnt = i-1
        while (cnt >= 0 && nums[cnt] > cur) { // 注意基线条件
            nums[cnt+1] = nums[cnt]
            cnt--
        }
        nums[cnt+1] = cur
    }
    return nums
};
```
时间复杂度：O(n^2)

空间复杂度：O(1)

## 归并排序
归并排序算法：
- 将数组分为两部分，分别排序，然后合并

代码：
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const n = nums.length
    if (n <= 1) return nums
    const pivot = Math.floor(n / 2) // 二分
    const left = nums.slice(0, pivot)
    const right = nums.slice(pivot)
    return merge(sortArray(left), sortArray(right))
};

function merge(left, right) {
    const res = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    while (left.length > 0) res.push(left.shift())
    while (right.length > 0) res.push(right.shift())
    return res
}
```
时间复杂度：O(nlgn)

空间复杂度：O(n) // 新建一个数组

## 快速排序
快速排序是非常常用的排序算法，比选择排序快得多。快速排序使用了分治的思想。算法步骤如下：
- 选择基准值
- 将数组分为两个子数组：小于基准值的元素组成的子数组和大于基准值的元素组成的子数组
- 将这两个子数组进行快速排序

在具体实现过程中，我们使用指针操作进行原地排序

代码：
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums
    return fastSort(nums, 0, nums.length)
};
function fastSort(nums, left, right) {
    if (left < right) {
        const pivot = partition(nums, left, right)
        fastSort(nums, left, pivot-1)
        fastSort(nums, pivot+1, right)
    }
    return nums
}
function partition(nums, left, right) {
    //对当前数组进行排序，返回排序后基准值的下标
    //取第一个值作为基准值
    const x = nums[left] 
    let i = left+1
    for (let j=i; j<=right; j++) {
        if (nums[j] < x) {
            swap(nums, i, j)
            i++
        }
    }
    swap(nums, left, i-1)
    return i-1
}
function swap(nums, p, q) {
    const temp = nums[p]
    nums[p] = nums[q]
    nums[q] = temp
}
```
时间复杂度：平均时间复杂度O(nlgn)，最坏时间复杂度O(n^2) - 此时数组是顺序的

空间复杂度：O(1)





