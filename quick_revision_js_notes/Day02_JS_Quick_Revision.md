# 📔 Day 2 – JavaScript Revision Notes

## 1. Data Types

### Primitive (Immutable, compared by value)
- **Number** → `1`, `3.14`
- **String** → `'a'`, `"text"`, `` `template` ``
- **Boolean** → `true`, `false`
- **Null** → intentional empty value
- **Undefined** → declared but not assigned
- **Symbol** → unique identifier

```js
let a = 10
let b = 10
a === b // true
````

---

### Non-Primitive (Mutable, compared by reference)

* **Array**
* **Object**
* **Function**

```js
let arr1 = [1,2]
let arr2 = [1,2]
arr1 === arr2 // false

let arr3 = arr1
arr3 === arr1 // true
```

📌 **Rule:** Never compare arrays or objects by value.

---

## 2. Numbers

### Declaration

```js
let age = 25
const PI = 3.14
```

### Math Object (Most Used)

```js
Math.round(4.6)   // 5
Math.floor(4.9)   // 4
Math.ceil(4.1)    // 5
Math.min(1,2,3)   // 1
Math.max(1,2,3)   // 3
Math.abs(-10)     // 10
Math.sqrt(16)     // 4
Math.pow(2,3)     // 8
```

### Random Number (0–10)

```js
Math.floor(Math.random() * 11)
```

---

## 3. Strings

### Declaration

```js
let name = 'JavaScript'
let msg = `Hello ${name}`
```

### Concatenation

```js
'Hello ' + 'World'
`Hello ${world}`
```

---

### Escape Characters

* `\n` → new line
* `\t` → tab
* `\\` → backslash
* `\'` `\"` → quotes

---

## 4. String Methods (High-Yield)

```js
let s = 'JavaScript'
```

| Method           | Purpose        |
| ---------------- | -------------- |
| `length`         | string length  |
| `toUpperCase()`  | uppercase      |
| `toLowerCase()`  | lowercase      |
| `substring(a,b)` | extract        |
| `substr(a,n)`    | extract        |
| `split(' ')`     | string → array |
| `trim()`         | remove spaces  |
| `includes('a')`  | true/false     |
| `replace(a,b)`   | replace        |
| `indexOf()`      | first index    |
| `lastIndexOf()`  | last index     |
| `startsWith()`   | boolean        |
| `endsWith()`     | boolean        |
| `repeat(n)`      | repeat string  |

📌 Strings are **immutable**.

---

## 5. typeof Operator

```js
typeof 'abc'      // string
typeof 10         // number
typeof true       // boolean
typeof undefined  // undefined
typeof null       // object (JS bug)
typeof NaN        // number
```

---

## 6. Type Casting

### String → Number

```js
Number('10')
parseInt('10')
+'10'
```

### String → Float

```js
parseFloat('9.8')
Number('9.8')
```

### Float → Int

```js
parseInt(9.8) // 9
```

---

## ⚡ Quick Revision Rules

* Primitive → **value comparison**
* Non-primitive → **reference comparison**
* Strings are **immutable**
* `typeof null === 'object'` (remember this!)
* Prefer **template literals** over `+`
* Always convert string numbers before math

---