# 📘 JavaScript Arrays — Quick Revision Notes (Day 5)

## What is an Array?
- Stores **multiple values** in one variable
- **Ordered**, **mutable**
- Index starts from **0**
- Can store **duplicate values** and **mixed data types**

---

## Creating Arrays

### Empty Array
```js
const arr1 = []
const arr2 = Array()
````

### Array with Values

```js
const numbers = [1, 2, 3]
const mixed = ['JS', 10, true, { lang: 'JavaScript' }]
```

### Array from String

```js
'JavaScript'.split('')     // ['J','a','v','a','S','c','r','i','p','t']
'a,b,c'.split(',')         // ['a','b','c']
```

---

## Accessing Elements

```js
arr[0]                     // first element
arr[arr.length - 1]        // last element
```

---

## Modifying Elements

```js
arr[0] = 'new value'
```

---

## Important Array Methods

### Creation & Info

* `Array(n)` → creates empty slots
* `length` → size of array
* `Array.isArray(x)` → check array

---

### Searching

* `indexOf(x)` → index or `-1`
* `lastIndexOf(x)`
* `includes(x)` → true / false

---

### Adding / Removing Elements

```js
push(x)     // add at end
pop()       // remove from end
unshift(x)  // add at beginning
shift()     // remove from beginning
```

---

### Copying & Slicing

```js
slice(start, end)   // non-mutating
splice(start, count, items...) // mutates array
```

---

### Combining & Filling

```js
concat(arr2)
Array(5).fill(0)
```

---

### Convert to String

```js
toString()
join(', ')
```

---

### Order Operations

```js
reverse()
sort()
```

---

## Array of Arrays (2D Arrays)

```js
const fullStack = [
  ['HTML', 'CSS', 'JS'],
  ['Node', 'MongoDB']
]

fullStack[0]   // frontend
fullStack[1]   // backend
```

---

## Key Takeaways

* Arrays are **mutable**
* Most methods either **mutate** or **return a new array**
* Use `slice` when you don’t want to change original data
* Use `splice` when modification is required

---
