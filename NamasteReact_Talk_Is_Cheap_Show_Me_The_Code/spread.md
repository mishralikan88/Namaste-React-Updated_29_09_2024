# 1. Spread in Arrays

```js

const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];

console.log(moreNums); // [1, 2, 3, 4, 5]

```

Explanation: The spread operator unpacks the elements of nums into the new array.

# 2. Spread in Objects

```js

const user = { name: 'Likan', age: 30 };
const updatedUser = { ...user, location: 'India' };

console.log(updatedUser); // { name: 'Likan', age: 30, location: 'India' }

```

Explanation: The spread operator copies all key-value pairs from user into updatedUser, then adds/overwrites the location property.

# 3. Spread in Function Arguments

```js

function sum(a, b, c) {
  return a + b + c;
}

const values = [10, 20, 30];
console.log(sum(...values)); // 60

```
Explanation: The array values is unpacked into individual arguments for the sum function.