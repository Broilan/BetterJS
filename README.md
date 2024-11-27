# BetterJS

**BetterJS** is a lightweight and modular JavaScript/TypeScript library that extends native functionality with a variety of utility functions for working with arrays, maps, math operations, objects, sets, and strings. Its static class structure makes it easy to access these utilities while keeping your code clean and organized.

---

## Features

- **Array Utilities**: Perform common operations like chunking, flattening, and grouping.
- **Map Utilities**: Manipulate Maps with ease, including filtering and key-value transformations.
- **Math Utilities**: Simplify mathematical computations such as interpolation, factorials, and finding primes.
- **Object Utilities**: Clone, pick, omit, and validate objects with minimal effort.
- **Set Utilities**: Operate on sets for unions, intersections, and more.
- **String Utilities**: Reverse strings, count characters, and check for palindromes.

---

## Installation

Install via npm:

```bash
npm install BetterJS
```

Or yarn:

```bash
yarn add BetterJS
```

---

## Usage

### Importing the Library

```typescript
import { BetterJS } from 'better-js-utils';
```

---

## API Overview

### **Array Utilities**

```typescript
BetterJS.array.chunk(array, size);
BetterJS.array.flatten(array);
BetterJS.array.unique(array);
BetterJS.array.intersection(array1, array2);
BetterJS.array.groupBy(array, keyFn);
BetterJS.array.difference(array1, array2);
BetterJS.array.partition(array, predicate);
BetterJS.array.shuffle(array);
BetterJS.array.zip(array1, array2);
BetterJS.array.unzip(arrayOfPairs);
```

| Function         | Description                                                                                  |
|------------------|----------------------------------------------------------------------------------------------|
| `chunk`          | Splits an array into smaller chunks of a given size.                                        |
| `flatten`        | Flattens a nested array into a single-level array.                                          |
| `unique`         | Returns an array with unique values.                                                        |
| `intersection`   | Finds the common elements between two arrays.                                               |
| `groupBy`        | Groups elements of an array by a specified key or function.                                 |
| `difference`     | Returns elements in the first array not found in the second.                                |
| `partition`      | Splits an array into two arrays based on a quality.                                       |
| `shuffle`        | Randomly shuffles the elements of an array.                                                 |
| `zip`            | Combines two arrays into an array of pairs.                                                 |
| `unzip`          | Splits an array of pairs into two arrays.                                                   |

---

### **Map Utilities**

```typescript
BetterJS.map.invert(map);
BetterJS.map.filterMap(map, predicate);
BetterJS.map.mapValues(map, transformFn);
BetterJS.map.mergeMaps(map1, map2, resolverFn);
BetterJS.map.mapKeys(map, transformFn);
```

| Function       | Description                                                                                  |
|----------------|----------------------------------------------------------------------------------------------|
| `invert`       | Swaps keys and values in a Map.                                                             |
| `filterMap`    | Filters Map entries based on a predicate.                                                   |
| `mapValues`    | Transforms the values of a Map using a callback function.                                   |
| `mergeMaps`    | Combines two Maps, resolving conflicts with a callback.                                     |
| `mapKeys`      | Transforms the keys of a Map using a callback function.                                     |

---

### **Math Utilities**

```typescript
BetterJS.math.lerp(start, end, t);
BetterJS.math.clamp(value, min, max);
BetterJS.math.isPrime(number);
BetterJS.math.factorial(number);
BetterJS.math.gcd(a, b);
BetterJS.math.lcm(a, b);
BetterJS.math.mean(arrayOfNumbers);
```

| Function     | Description                                                                                  |
|--------------|----------------------------------------------------------------------------------------------|
| `lerp`       | Linearly interpolates between two numbers.                                                  |
| `clamp`      | Restricts a number to a specified range.                                                    |
| `isPrime`    | Checks if a number is a prime number.                                                       |
| `factorial`  | Calculates the factorial of a number.                                                       |
| `gcd`        | Finds the greatest common divisor of two numbers.                                           |
| `lcm`        | Finds the least common multiple of two numbers.                                             |
| `mean`       | Calculates the mean (average) of an array of numbers.                                       |

---

### **Object Utilities**

```typescript
BetterJS.object.deepClone(object);
BetterJS.object.isEmpty(object);
BetterJS.object.get(object, keyPath);
BetterJS.object.omit(object, keys);
BetterJS.object.pick(object, keys);
```

| Function   | Description                                                                                  |
|------------|----------------------------------------------------------------------------------------------|
| `deepClone`| Creates a deep copy of an object.                                                           |
| `isEmpty`  | Checks if an object has no properties.                                                      |
| `get`      | Safely retrieves a value at a nested path in an object.                                      |
| `omit`     | Returns a new object without specific keys.                                                 |
| `pick`     | Returns a new object with only specific keys.                                               |

---

### **Set Utilities**

```typescript
BetterJS.set.union(set1, set2);
BetterJS.set.difference(set1, set2);
BetterJS.set.intersection(set1, set2);
BetterJS.set.isSubset(setA, setB);
BetterJS.set.filterSubset(set, predicate);
```

| Function        | Description                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------|
| `union`         | Combines two sets into one.                                                                 |
| `difference`    | Returns elements in the first set not in the second.                                        |
| `intersection`  | Finds the common elements between two sets.                                                 |
| `isSubset`      | Checks if one set is a subset of another.                                                   |
| `filterSubset`  | Filters a set based on a predicate function.                                                |

---

### **String Utilities**

```typescript
BetterJS.string.reverse(string);
BetterJS.string.truncate(string, maxLength, ellipsis);
BetterJS.string.isPalindrome(string);
BetterJS.string.countChars(string, char);
```

| Function       | Description                                                                                  |
|----------------|----------------------------------------------------------------------------------------------|
| `reverse`      | Reverses a string.                                                                          |
| `truncate`     | Truncates a string to a maximum length, appending ellipsis if necessary.                     |
| `isPalindrome` | Checks if a string is a palindrome (ignores case and non-alphanumeric characters).          |
| `countChars`   | Counts the occurrences of a specific character in a string.                                 |

---

### Versioning

The current version of BetterJS is **1.0.0**.

---

## Contributing

We welcome contributions! If you'd like to add new features, fix bugs, or improve the documentation, please fork the repository, create a new branch, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Let me know if you'd like to add anything specific, such as installation badges or examples for each function!
