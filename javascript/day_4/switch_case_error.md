
# Why Your JavaScript `switch` Code Is Not Working

## ❌ What’s Wrong in the Code?

### 1️⃣ `switch` Uses Strict Equality (`===`), Not Conditions

```js
switch (student_score) {
  case student_score >= 80:


student_score >= 80 evaluates to true or false

So the code becomes:

case true:


But switch (student_score) is a number

A number will never match true or false

👉 Therefore, none of the cases run.

2️⃣ Chained Comparisons Don’t Work in JavaScript
80 > student_score >= 70


JavaScript evaluates this as:

(80 > student_score) >= 70


Example (student_score = 75):

80 > 75        // true
true >= 70    // false (true becomes 1)


❌ This condition is never true as intended.

✅ Correct Way #1: Use if–else (Recommended)

Best choice when working with ranges.

let student_score = +prompt("Enter the score of the student");

if (student_score >= 80) {
  console.log("A");
} else if (student_score >= 70) {
  console.log("B");
} else if (student_score >= 60) {
  console.log("C");
} else if (student_score >= 50) {
  console.log("D");
} else {
  console.log("F");
}


✔ Simple
✔ Readable
✔ Correct

✅ Correct Way #2: Using switch Properly

If you really want to use switch, switch on true.

let student_score = +prompt("Enter the score of the student");

switch (true) {
  case student_score >= 80:
    console.log("A");
    break;
  case student_score >= 70:
    console.log("B");
    break;
  case student_score >= 60:
    console.log("C");
    break;
  case student_score >= 50:
    console.log("D");
    break;
  default:
    console.log("F");
}


💡 Each case now evaluates to true or false.

🧠 Rule of Thumb

✅ Use if–else for ranges and conditions

✅ Use switch for exact values (1, "yes", "A")

📌 Key Takeaway

switch is not meant for range comparisons in JavaScript.
For grading systems, if–else is the cleanest and safest approach.