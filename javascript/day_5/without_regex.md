# Filter Companies With More Than One 'o'

## Problem Statement

Filter out company names that contain **more than one letter `'o'`** without using:

* `filter()`
* explicit loops (`for`, `while`)
* regular expressions (regex)

---

## Python Solution

```python
companies = ["Google", "Microsoft", "Yahoo", "Zoho", "Amazon", "Facebook"]

result = [c for c in companies if c.lower().count('o') > 1]

print(result)
```

---

## Output

```
['Google', 'Microsoft', 'Facebook']
```

---

## Explanation

* `c.lower()` → ensures case-insensitive comparison
* `.count('o')` → counts occurrences of the letter `'o'`
* `> 1` → keeps only names with more than one `'o'`
* List comprehension replaces both `filter()` and explicit loops

---

## One-Liner Version

```python
[c for c in companies if c.lower().count('o') > 1]
```

---

## Variations

* **Exactly two `o`s**:

  ```python
  [c for c in companies if c.lower().count('o') == 2]
  ```

* **Case-sensitive**:

  ```python
  [c for c in companies if c.count('o') > 1]
  ```

* **Any other letter (example: `a`)**:

  ```python
  [c for c in companies if c.lower().count('a') > 1]
  ```

---

## Key Takeaway

`str.count()` + list comprehension is a powerful and clean alternative when loops, `filter()`, and regex are restricted.