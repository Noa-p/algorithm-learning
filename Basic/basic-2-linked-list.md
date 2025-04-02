# 数据结构篇 - 02.链表

### 线性链表的特点
- 用一组任意的存储单元存储数据元素（可连续或不连续）。
- 每个数据元素不仅存储自身信息，还存储一个指示其直接后继的信息。这两部分信息组成的数据元素叫做**结点**（node）。
- 存储直接后继存储位置的域叫做**指针域**。
- n个节点连接成一个**链表**。

### 分类
- 线性链表（单链表）
- 循环链表：在线性链表的基础上，表最后一个结点的指针域指向头结点，形成一个环
- 双向链表：结点中存在两个指针域，分别指向直接后继和直接前驱（双链表）

### 链表的基本操作
- 插入：给定指针的情况下 `O(1)` 未给定指针需要先遍历找到结点 `O(n)`
- 删除：`待删除位置的前驱结点.next = 待删除位置的前驱结点.next.next`
- 遍历：`O(n)`

### 常见题型
- [反转链表](https://github.com/Noa-p/algorithms-learning/issues/47)
- [合并链表](https://github.com/Noa-p/algorithms-learning/issues/48)
- [相交/环形链表](https://github.com/Noa-p/algorithms-learning/issues/49)
- [更多](https://github.com/Noa-p/algorithms-learning/issues/50)
- 设计题：[707. Design Linked List](https://leetcode.com/problems/design-linked-list/)
