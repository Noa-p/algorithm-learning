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

## 快速排序
快速排序是非常常用的排序算法，比选择排序快得多。快速排序使用了分治的思想。

代码：
```javascript
```




