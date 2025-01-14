# Math
有一些题目需要利用数学知识来解决

### [1071. Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/description/)
#### Intuition
[Euclidean Algorithm](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm)

#### Code
```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // greatest common divisor
    if (str1 + str2 !== str2 + str1) return '';

    // Euclidean Algorithm
    const n = str1.length, m = str2.length;
    function gcd(x, y) {
        if (!y) return x;
        return gcd(y, x % y);
    }

    let div = gcd(n, m);
    return str1.slice(0, div);
};
```
#### Complexity
Time: O(log(min(n,m)))

Space: O(1)
