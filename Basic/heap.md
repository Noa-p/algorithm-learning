# Heap
堆是一个树形数据结构，如无特殊说明，堆通常指二叉堆。它具有以下性质：
- 完全二叉树
- 对于每个节点，子节点的值总是大于等于/小于等于父节点的值。即大根堆或小根堆。

堆常见操作：
- 插入元素
- 删除最小值/最大值
- 查询最小值/最大值
- 合并两个堆
- 减小一个元素的值

## Heap in JavaScript
JavaScript没有内置的堆数据结构，但可以利用数组自己实现一个。
```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }
    peak() {
        return this.heap[0];
    }
    insert(val) {
        this.heap.push(val);
        this.up();
    }
    delete() {
        // delete min
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.down();
        }
        return min;
    }
    up() {
        // if val<val of father, swap
        let id = this.heap.length - 1;
        let parentId = Math.ceil(id / 2) - 1;
        while (id > 0 && this.heap[id] < this.heap[parentId]) {
            [this.heap[id], this.heap[parentId]] = [this.heap[parentId], this.heap[id]];
            id = parentId;
            parentId = Math.ceil(id / 2) - 1;
        }
    }
    down() {
        // 
        let id = 0;
        const n = this.heap.length;
        while (id * 2 + 1 < n) {
            let sonId = id * 2 + 1;
            if (sonId + 1 < n && this.heap[sonId + 1] < this.heap[sonId]) sonId++;
            if (this.heap[sonId] < this.heap[id]) {
                [this.heap[id], this.heap[sonId]] = [this.heap[sonId], this.heap[id]];
            }
            id = sonId;
        }
    }
}
```

## 堆相关问题
- Heap Sort
- [K'th Largest Element](https://leetcode.com/problems/kth-largest-element-in-an-array/description/)

## Reference
- [1] [Heap Data Structure](https://www.geeksforgeeks.org/heap-data-structure/)
