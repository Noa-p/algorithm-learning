# 递归、迭代和分治

## 递归
递归是很多算法都会用到的一种编程方法。

递归函数是会调用自身的函数。包含两部分：
- 递归条件：函数调用自己
- 基线条件：函数不再调用自己，避免形成无限循环。即退出递归的条件，停止递归。

在实际解题的过程中我发现，需要的编写递归函数主要有几种类型：
- 自上而下：这种情况下，我们总是在递归之前做相应操作，直到终止递归，没有返回。
- 自下而上：这种情况下，我们总是在获得递归的结果之后，使用结果做相应操作。在终止递归处，有相应返回。
- 双递归：针对每次递归，又需要通过递归获取当前问题的解。

### 例题
[01 剑指 Offer 16. 数值的整数次方](https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/)

思路一：每次递归将结果乘上x，递归n次，得到结果。但这样时间复杂度为O(n)，当n很大时会超时

思路二：

- 可以发现x^n = x^(n/2) * x^(n/2)，这样只需要计算一半的值，就可以重复使用构造结果。时间复杂度为O(lgn)
- 该题属于自下而上返回结果的类型。因为我们需要得到最小问题的解才能构造整体的解

代码：
```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    function pow(n) {
        if (n == 0) return 1
        if (n == 1) return x
        const div = Math.floor(n / 2)
        const res = pow(div)
        return n % 2 == 0 ? res * res : res * res * x
    }
    return n >= 0 ? pow(n) : 1 / pow(-n) //注意n可能为负数
};
```
类似题目：
- [面试题 08.05. 递归乘法](https://leetcode-cn.com/problems/recursive-mulitply-lcci/)

[02 206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

思路：
- 可以用递归也可以用迭代实现
- 写法一从左到右（从上到下）处理结点，返回最后一个结点即反转链表的表头。
- 写法二从右到左（从下到上）处理结点，返回最后一个结点即反转链表的表头。

代码：
```javascript
写法一：
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //递归
    function dfs(pre, cur) {
        if (cur == null) return pre
        const temp = cur.next
        cur.next = pre
        return dfs(cur, temp)
    }
    return dfs(null, head)
};
写法二：推荐
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
```
时间复杂度：O(n)
空间复杂度：O(n)

### 相关题目
- 链表相关
- 二叉树遍历

## 迭代
迭代也是一种编程方法。

相较于递归通过调用自身实现循环，迭代是在函数内部进行循环，循环中参与运算的变量同时也是保存结果的变量，并作为下一次循环计算的起始值。

当循环的次数比较大时，迭代的效率是明显优于递归的。

## 分治
分治是一种递归式问题的解决方法。分治思想的核心是，将问题化作多个小问题，分别解决，最终得到问题的解。

使用分治的步骤：
1. 找出基线条件，这种条件必须尽可能简单
2. 不断地将问题分解（缩小规模），直到符合基线条件

### 相关题目
- 快速排序
- 二分专题


