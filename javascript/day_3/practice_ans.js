// console.log(
//   4 > 3,
//   4 >= 3,
//   4 < 3,
//   4 <= 3,
//   4 == 4,
//   4 === 4,
//   4 != 4,
//   4 !== 4,
//   4 != "4",
//   4 == "4",
//   4 === "4"
// );
// console.log("python".length !== "jargon".length);
// let firstName = "Mithlesh";
// let lastName = "Gupta";
// let country = "India";
// let city = "New Delhi";
// let age = 25;
// let isMarried = false;
// let year = 2025;
// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof year);
// console.log(typeof "10" == typeof 10);
// console.log(parseInt("9.8") == 10);
// console.log(Boolean(0));
// console.log(Boolean(0.0));
// console.log(Boolean(""));
// console.log(Boolean(""));
// console.log(Boolean(``));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0n));
// console.log(Boolean(false));
// console.log(Boolean(true));
// console.log(Boolean(1));
// console.log(3 > 2);
// console.log(
//   4 > 3 && 10 < 12,
//   4 > 3 && 10 > 12,
//   4 > 3 || 10 < 12,
//   4 > 3 || 10 > 12,
//   !(4 > 3),
//   !(4 < 3),
//   !false,
//   !(4 > 3 && 10 < 12),
//   !(4 > 3 && 10 > 12),
//   !(4 === "4")
// );

let a = "dragon";
let b = "python";
let isonexist = a.includes("on") && b.includes("on");
console.log(`There is no 'on' in both dragon and python ${!isonexist}`);
