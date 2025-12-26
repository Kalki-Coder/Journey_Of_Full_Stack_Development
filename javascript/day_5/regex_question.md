# Filtering Companies with More Than One "o" Using Regex (Beginner Guide)

This article explains a JavaScript code snippet that filters company names containing **more than one letter "o"**, **without using loops or the `filter()` method**.  
Instead, we rely entirely on **regular expressions**.

---

## 📌 Problem Statement

Given an array of company names:

```js
["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
````

We want to extract only those company names that contain **at least two `o` characters**.

### Constraints

* ❌ No loops (`for`, `while`)
* ❌ No `filter()` method
* ✅ Regular expressions are allowed

---

## 🧾 The Code Snippet

```js
const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

const result = companies.join(",").match(/\b\w*o\w*o\w*\b/gi);

console.log(result);
```

---

## 🔍 Step-by-Step Explanation

### 1️⃣ The Array

```js
const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
```

* This is a normal JavaScript array
* Each element is a string representing a company name

---

### 2️⃣ Converting Array to String using `join()`

```js
companies.join(",")
```

* `join(",")` merges all array elements into **one string**
* A comma `,` is placed between each element

#### Resulting string:

```txt
"Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
```

📌 **Why do this?**
Regular expressions work on **strings**, not arrays.

---

### 3️⃣ Using `match()` with a Regular Expression

```js
.match(/\b\w*o\w*o\w*\b/gi)
```

The `match()` method searches the string and returns all matches found by the regex.

---

## 🧠 Regex Breakdown

### The Regex Pattern

```regex
\b\w*o\w*o\w*\b
```

| Part  | Meaning                                |
| ----- | -------------------------------------- |
| `\b`  | Word boundary (start or end of a word) |
| `\w*` | Any number of letters (0 or more)      |
| `o`   | First letter "o"                       |
| `\w*` | Any letters in between                 |
| `o`   | Second letter "o"                      |
| `\w*` | Any letters after                      |
| `\b`  | Word boundary                          |

### Flags Used

* `g` → Global search (find **all matches**)
* `i` → Case-insensitive (`O` or `o` both match)

📌 **Meaning in plain English:**

> “Find all words that contain **at least two ‘o’ letters**, regardless of case.”

---

## ✅ Matches Found

```js
["Google", "Microsoft"]
```

### Why?

| Company   | Reason            |
| --------- | ----------------- |
| Google    | Contains `oo`     |
| Microsoft | Contains two `o`s |
| Facebook  | Only one `o`      |
| Apple     | No `o`            |
| IBM       | No `o`            |
| Oracle    | One `o`           |
| Amazon    | One `o`           |

---

## 🧩 Final Output

```js
["Google", "Microsoft"]
```

---

## 🧠 Simple Mental Model

1. Convert array → string
2. Apply regex on the string
3. Extract words with **two `o`s**
4. Get the result as an array

---

## 📌 Key Takeaways

* `join()` helps convert arrays into strings
* `match()` extracts regex matches
* Regex can replace loops for pattern-based problems
* This approach satisfies constraints often used in interviews


---
