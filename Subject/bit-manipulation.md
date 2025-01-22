# Bit Manipulation

## Bitwise operators in JS
|Operator|Description|Example|
|----|----|----|
|&|The bitwise AND operator returns a number or BitInt whose binary representation has a `1` in each bit position for which the corresponding bits of both operands are `1`.||
|\||The bitwise OR operator returns a bumber or BigInt whose binary representation has a `1` in each bit position for which the corresponding bits of either or both operands are `1`.||
|~|The bitwise NOT operator returns a number or BigInt whose binary representation has a `1` in each bit position for which the corresponding bit of the operand is `0`, and a `0` otherwise.||
|^|The bitwise XOR operator returns a number or BigInt whose binary representation has a `1` in each bit position for which the corresponding bits of either but not both operands are `1`.||
|<<|The left shift operator returns a number or BigInt whose binary representation is the first operand shifted by the specified number of bits to the left. Excess bits shifted off to the left are discarded, and zero bits are shifted in from the right.||
|>>|The right shift operator returns a number or BigInt whose binary representation is the first operand shifted by the specified number of bits to the right. Excess bits shifted off to the right are discarded, and copies of the leftmost bit are shifted in from the left.||
|>>>|The unsigned right shift operator returns a number whose binary representation is the first operand shifted by the specified number of bits to the right. Excess bits shifted off to the right are discarded, and zero bits are shifted in from the left.||

## Bitwise Tricks
|One-linear code|Function|
|----|----|
|x & 1|Check Odd or Even|
|x & (x - 1)|Clear the lowest set bit of x|
|x & ~(x - 1)|Extract the lowest set bit of x|
|x >> 1|Divide x by 2|
|x << 1|Multiply x by 2|

## Bitwise Formulae
|Bit Operator|Formula|
|----|----|
|&|a & 1 = a <br /> a & 0 = 0 <br /> a & a = a <br /> a & (~a) = 0 |
|\||a \| 1 = 1 <br /> a \| 0 = a <br /> a \| a = a <br /> a \| (~a) = 1|
|^|a ^ 1 = ~a <br /> a ^ 0 = a <br /> a ^ a = 0 <br /> a ^ (~a) = 1|

## Common bit manipulation problems
- Checking Odd or Event
- Swap Two Numbers
- Finding the Single Odd Occurrence
- Power of Two Checks
- Count Total Bits Set

### Checking Odd or Event
```javascript
if (x & 1) {
  // odd
} else {
  // even
}
```
### Swap Two Numbers
``` javascript
a = a ^ b;
b = a ^ b;
a = a ^ b;
```
拓展：[137. Single Number II](https://leetcode.com/problems/single-number-ii/description/?envType=study-plan-v2&envId=top-interview-150)
### Finding the Single Odd Occurrence
XOR cancels pairs, leaving the odd-occurrence element.
```javascript
let res = 0;
for (let num of nums) {
  res ^= num;
}
```
### Power of Two Checks
```javascript
function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0 && num > 0;
}
```
### Count Total Bits Set
```javascript
function countSetBits(num) {
  let count = 0;
  while (num) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}
```

## Reference
[1] [Bit manipulation in JavaScript](https://www.geeksforgeeks.org/bit-manipulation-in-javascript/?ref=header_outind)

[2] [Bit Tricks for Competitive Programming](https://www.geeksforgeeks.org/bit-tricks-competitive-programming/)

[3] [Bitwise AND (&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)

