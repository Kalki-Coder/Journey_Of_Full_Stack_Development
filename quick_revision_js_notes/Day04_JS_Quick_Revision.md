# 📔 Day 4 – JavaScript Conditionals (Quick Revision)

## What are Conditionals?
- Used to make decisions in code
- Control the flow of execution based on conditions
- Conditions evaluate to **true** or **false**

---

## Ways to Write Conditionals in JavaScript
- `if`
- `if else`
- `if else if else`
- `switch`
- `ternary operator`

---

## if Statement
- Executes code **only if condition is true**

```js
if (condition) {
  // runs if condition is true
}
````

**Example**

```js
let num = 3
if (num > 0) {
  console.log('Positive number')
}
```

---

## if else Statement

* One block for **true**, another for **false**

```js
if (condition) {
  // true block
} else {
  // false block
}
```

**Example**

```js
let isRaining = false
if (isRaining) {
  console.log('Take rain coat')
} else {
  console.log('No rain coat needed')
}
```

---

## if else if else

* Used for **multiple conditions**
* Checked from top to bottom

```js
if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // default
}
```

**Example**

```js
let a = 0
if (a > 0) {
  console.log('Positive')
} else if (a < 0) {
  console.log('Negative')
} else {
  console.log('Zero')
}
```

---

## switch Statement

* Alternative to long `if else if`
* Uses `case`, `break`, and `default`

```js
switch (value) {
  case x:
    // code
    break
  case y:
    // code
    break
  default:
    // code
}
```

**Example**

```js
let weather = 'sunny'
switch (weather) {
  case 'rainy':
    console.log('Take rain coat')
    break
  case 'sunny':
    console.log('Go out freely')
    break
  default:
    console.log('Normal day')
}
```

### switch with Conditions

```js
let num = 5
switch (true) {
  case num > 0:
    console.log('Positive')
    break
  case num < 0:
    console.log('Negative')
    break
  default:
    console.log('Zero')
}
```

---

## Ternary Operator

* Short form of `if else`
* Best for **simple conditions**

```js
condition ? trueValue : falseValue
```

**Example**

```js
let isRaining = true
isRaining ? console.log('Take rain coat') : console.log('No rain coat')
```

---

## Key Revision Points

* `if` → single condition
* `else if` → multiple conditions
* `switch` → cleaner for fixed values
* `ternary` → short & readable for simple logic
* Always use `break` in `switch`

---
