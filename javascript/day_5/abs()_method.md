# JavaScript Math.abs() – Beginner Summary

## What is Math.abs()?

`Math.abs()` returns the **absolute value** of a number.

👉 Absolute value means the **distance from zero**  
👉 Distance is **never negative**

### Syntax
```js
Math.abs(number)
````

---

## What is Absolute Value?

| Number | Absolute Value |
| ------ | -------------- |
| 5      | 5              |
| -5     | 5              |
| 0      | 0              |

Negative numbers become positive.
Positive numbers stay the same.

---

## Basic Examples

### Positive Number

```js
Math.abs(10) // 10
```

### Negative Number

```js
Math.abs(-10) // 10
```

### Zero

```js
Math.abs(0) // 0
```

---

## Why Math.abs() is Needed

Used when **sign (+ / -) doesn’t matter**, only size matters.

### Common Use Cases

* Difference between numbers
* Distance calculations
* Games (movement, collision)
* Finance (profit / loss magnitude)

---

## Real Examples

### Difference Between Two Numbers

```js
let a = 5;
let b = 12;

let diff = Math.abs(a - b);
console.log(diff); // 7
```

### Distance Example

```js
let pos1 = -20;
let pos2 = 10;

let distance = Math.abs(pos1 - pos2);
console.log(distance); // 30
```

---

## Using Math.abs() with Decimals

```js
Math.abs(-3.14) // 3.14
```

---

## Using Math.abs() with Strings

JavaScript converts numeric strings automatically.

```js
Math.abs("-8") // 8
```

Invalid conversion results in `NaN`:

```js
Math.abs("hello") // NaN
```

---

## Special Values Behavior

| Input                 | Output |
| --------------------- | ------ |
| `Math.abs(null)`      | `0`    |
| `Math.abs(true)`      | `1`    |
| `Math.abs(false)`     | `0`    |
| `Math.abs(undefined)` | `NaN`  |

---

## Common Beginner Mistakes

### ❌ Forgetting `Math`

```js
abs(-5) // Error
```

### ✅ Correct

```js
Math.abs(-5)
```

---

### ❌ Expecting Original Variable to Change

```js
let x = -10;
Math.abs(x);
console.log(x); // -10
```

### ✅ Correct Way

```js
let x = -10;
x = Math.abs(x);
console.log(x); // 10
```

---

## Key Points to Remember

* `Math.abs()` always returns a **non-negative number**
* It **does not modify** the original value unless reassigned
* Works with:

  * Integers
  * Negative numbers
  * Decimals
  * Numeric strings

---

## One-Line Summary

> `Math.abs()` gives the positive version of a number by removing its negative sign.

---
