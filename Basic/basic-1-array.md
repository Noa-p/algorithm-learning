# 数据结构篇 - 01. 数组，栈，队列

## 数组

### 数组的特性
- 一个数组表示n个数据元素的有限序列
- 数组长度固定，一旦创建不能修改（但也存在动态数组）
- 所有元素需要是同一类型（个别语言例外）
- 使用下标索引获取到所存储的元素
- 下标范围[0, arr.length-1]
- 多维数组

### 数组的基本操作
- 随机访问 `O(1)`
- 遍历 `O(n)`
- 任意位置插入、删除元素，如果插入/删除发生在数组中间，时间复杂度`O(n)`，如果发生在尾部，时间复杂度`O(1)`

### JavsScript中的数组操作
- 下标访问 `O(1)`
- 遍历：map, forEach `O(n)`
- 插入/删除：push/pop, unshift/shift `O(1)`

### 相关题目
- [数组相关题目](https://github.com/Noa-p/algorithms-learning/labels/%E6%95%B0%E7%BB%84)

#### Matrix
- [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
- [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
- [48. Rotate Image](https://leetcode.com/problems/rotate-image/)

## 栈
栈是受限的线性表。
### 栈的特性
- 后进先出（LIFO）

### 栈的基本操作
- 进栈 - push `O(1)`
- 出栈 - pop `O(1)`
- 取栈顶 - top `O(1)`
- 判断是否为空栈 `O(1)`
- 返回栈的长度 `O(1)`

JavaScript的标准库对象Array中已经包含一些栈操作比如pop/push

### 相关题目
- [栈相关题目](https://github.com/Noa-p/algorithms-learning/labels/%E6%A0%88)
- [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
- [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) `Reverse Polish Notation` `二叉树后序遍历`
- [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

## 队列
队列也是受限的线性表。
### 队列的特性
- 先进先出（FIFO）

### 队列的基本操作
- 插入 `O(1)`
- 删除 `O(1)`
- 查看队首 `O(1)`
- 判断队列是否为空 `O(1)`
- 返回队列长度 `O(1)`
- 判断是否为空栈 `O(1)`
- 判断是否为空栈 `O(1)`

JavaScript的标准库对象Array中已经包含一些队列操作比如unshift/shift

### 相关题目
[队列相关题目](https://github.com/Noa-p/algorithms-learning/labels/%E9%98%9F%E5%88%97)

## 相关专题
### 单调栈
### 栈匹配
