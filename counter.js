// Write a function counter that returns another function.
// Each time the returned function is called, it should increment and return a counter value.
function counter() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}

const count = counter();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3