# 📘 JavaScript – Day 3 Quick Revision Notes

---

## 1. Booleans
Boolean values are:
- `true`
- `false`

Used in conditions and comparisons.

```js
4 > 3   // true
4 < 3   // false
````

### Truthy Values

* All numbers except `0`
* All non-empty strings
* `true`

### Falsy Values

* `0`, `0n`
* `null`
* `undefined`
* `NaN`
* `false`
* `''`, `" "`, ` `

---

## 2. Undefined

A variable declared but **not assigned** a value.

```js
let x;
console.log(x); // undefined
```

Returned when a function has no return value.

---

## 3. Null

Represents **intentional absence of value**.

```js
let value = null;
```

---

## 4. Operators

### Assignment

Used to assign values.

```js
let x = 10;
```

---

### Arithmetic Operators

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Modulus        |
| `**`     | Power          |

---

### Comparison Operators

Return `true` or `false`.

| Operator | Meaning            |
| -------- | ------------------ |
| `>`      | Greater than       |
| `<`      | Less than          |
| `>=`     | Greater or equal   |
| `<=`     | Less or equal      |
| `==`     | Value only         |
| `===`    | Value + Type       |
| `!=`     | Not equal          |
| `!==`    | Not equal (strict) |

✅ **Best practice:** Always use `===`

```js
3 == '3'   // true
3 === '3'  // false
```

---

### Logical Operators

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

```js
true && false // false
true || false // true
!true         // false
```

---

### Increment / Decrement

#### Increment

```js
++x  // pre-increment
x++  // post-increment (used more often)
```

#### Decrement

```js
--x
x--
```

---

### Ternary Operator

Short form of `if-else`.

```js
condition ? value1 : value2
```

```js
let result = age >= 18 ? "Adult" : "Minor";
```

---

### Operator Precedence

Defines **which operation runs first**.
Use parentheses `()` to avoid confusion.

---

## 5. Window Methods (Browser Only)

⚠️ Mainly for testing, not production.

### alert()

```js
alert("Hello");
```

### prompt()

```js
let name = prompt("Enter name");
```

### confirm()

```js
let ok = confirm("Are you sure?");
```

Returns `true` or `false`.

---

## 6. Date Object

Used to work with **date and time**.

```js
const now = new Date();
```

### Common Methods

| Method          | Purpose                 |
| --------------- | ----------------------- |
| `getFullYear()` | Year                    |
| `getMonth()`    | Month (0–11)            |
| `getDate()`     | Day of month            |
| `getDay()`      | Day of week (0–6)       |
| `getHours()`    | Hours                   |
| `getMinutes()`  | Minutes                 |
| `getSeconds()`  | Seconds                 |
| `getTime()`     | Milliseconds since 1970 |

---

### Unix Time

Milliseconds since **Jan 1, 1970**

```js
Date.now();
new Date().getTime();
```

---

### Simple Date Format

```js
const now = new Date();
console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`);
```

---

## ✅ Day 3 Key Takeaways

* Boolean logic controls program flow
* `===` is safer than `==`
* Truthy/Falsy values matter in conditions
* Ternary operator simplifies `if-else`
* Date object is essential for time-based logic

---
