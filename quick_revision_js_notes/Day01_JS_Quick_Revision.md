
---

````md
# Day 1 – JavaScript Quick Revision Notes

## What is JavaScript?
- JavaScript is a **programming language of the web**
- Used for:
  - Web interactivity
  - Web apps
  - Mobile & desktop apps
  - Server-side development (Node.js)

---

## How JavaScript Runs
- Runs in:
  - **Browser** (Chrome, Firefox, etc.)
  - **Node.js** (outside browser)

---

## Output in JavaScript
### console.log()
- Used to print output

```js
console.log('Hello World')
console.log(2 + 3)
````

* Multiple values allowed:

```js
console.log('Hello', 'JS', 2025)
```

---

## Comments

### Single-line

```js
// This is a comment
```

### Multi-line

```js
/*
 This is a
 multi-line comment
*/
```

---

## JavaScript Syntax Basics

* Strings must be inside:

  * `'single quotes'`
  * `"double quotes"`
  * `` `backticks` ``
* JavaScript is **case-sensitive**
* Errors due to wrong syntax are called **syntax errors**

---

## Arithmetic Operators

```js
2 + 3   // Addition
3 - 2   // Subtraction
2 * 3   // Multiplication
3 / 2   // Division
3 % 2   // Modulus (remainder)
3 ** 2  // Power
```

---

## Adding JavaScript to HTML

### 1. Inline Script

```html
<button onclick="alert('Hello')">Click</button>
```

### 2. Internal Script

```html
<script>
  console.log('Hello')
</script>
```

### 3. External Script (Recommended)

```html
<script src="main.js"></script>
```

---

## JavaScript Data Types (Primitive)

* **String**
* **Number**
* **Boolean**
* **undefined**
* **null**

---

### String

```js
'Hello'
"JavaScript"
`Template String`
```

### Number

```js
10
3.14
-5
```

### Boolean

```js
true
false
```

### Undefined

```js
let x
console.log(x) // undefined
```

### Null

```js
let value = null
```

---

## Checking Data Type

Use `typeof`

```js
typeof 'JS'        // string
typeof 10          // number
typeof true        // boolean
typeof undefined   // undefined
typeof null        // object (JS quirk)
```

---

## Variables

Used to store data.

### Keywords

* `let` → value can change
* `const` → value cannot change
* ❌ avoid `var`

---

### Variable Declaration

```js
let age = 25
const PI = 3.14
```

---

## Variable Naming Rules

✅ Valid:

```js
firstName
userAge
isLoggedIn
_num1
$price
```

❌ Invalid:

```js
1name
first-name
num#1
```

---

## Best Practices

* Use **camelCase**
* Use `const` by default
* Use `let` only if value changes
* One variable per line for clarity

---

## Summary (Day 1)

* JavaScript basics
* console.log()
* Comments
* Data types
* Variables
* Simple arithmetic
* JS in HTML

---
