// 1. Why does 0.1 + 0.2 !== 0.3 in JavaScript? How can you fix it?

  // JavaScript uses binary floating-point arithmetic, which causes small precision errors.
  // You can fix this by rounding the result using .toFixed() or multiplying by 10 before
  // performing operations and then dividing back.
function add(n1, n2) {
  return n1 + n2;
}

console.log("0.1 + 0.2 ", add(0.1, 0.2));
console.log("0.1 + 0.2 (toFixed)", add(0.1, 0.2).toFixed(1));
console.log("0.1 + 0.2 (*10)", add(0.1 * 10, 0.2 * 10) / 10);

// 2. What's the difference between parseInt("10px") and Number("10px")?
  // ParseInt extracts the number (10) because it stops reading at the first non-numeric character.
console.log("parseInt('10px') ", parseInt("10px"));
  // Number returns NaN because the entire string is not a valid number.
console.log("Number('10px') ", Number("10px"));

// 3. How do you round a number to 2 decimal places in JavaScript?
  // Use Math.round(), Math.floor(), or Math.ceil() depending on your needs.
  // For decimal places, multiply first, round, then divide back:
function roundToTwo(num) {
  return Math.round(num * 100) / 100;
}

console.log("rountToTwo ", roundToTwo(10.78923));
  // Or use .toFixed(2), but be careful—it returns a string!

// 4. How can you generate a random integer between min and max (inclusive)?
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("getRandomInt(1, 10) ", getRandomInt(1, 10));