// Given an array [1, 2, 2, 3, 4, 4, 5], return a new array with unique values.
function removeDuplicatesFilter(arr) {
  return arr.filter((el, index) => {
    return arr.indexOf(el) === index;
  });
}

function removeDuplicatesSet(arr) {
  return Array.from(new Set(arr));
} 

console.log("removeDuplicatesFilter() ", removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5]));
console.log("removeDuplicatesSet() ", removeDuplicatesSet([1, 2, 2, 3, 4, 4, 5]));

// Write a function that returns the largest number in an array.
function maxNumberReduce(arr) {
  return arr.reduce((previous, current) => {
    return current > previous ? current : previous 
  }, arr[0])
}

function maxNumberMath(arr) {
  return Math.max(...arr)
}

console.log("maxNumberReduce() ", maxNumberReduce([1, 2, 2, 10, 4, 4, 5]));
console.log("maxNumberMath() ", maxNumberMath([1, 2, 2, 10, 4, 4, 100]));

// Convert [[1, 2], [3, 4, [5, 6]]] into [1, 2, 3, 4, 5, 6] (recursively).
function flatten(arr) {
  return arr.reduce((previous, current) => {
    if(Array.isArray(current)) {
      return previous.concat(flatten(current));
    } else {
      return previous.concat(current);
    }
  }, []);
}

function flattenInfinity(arr) {
  return arr.flat(Infinity);
}

console.log("flatten() ", flatten([[1, 2], [3, 4, [5, 6]]]));
console.log("flattenInfinity() ", flatten([[1, 2], [3, 4, [5, 6]]]));

function rev(arr) {
  return [...arr].reverse();
}

function revMap(arr) {
  return arr.map((_, i) => arr[arr.length - 1 - i]);
}

function revReduce(arr) {
  return arr.reduce((acc, value) => [value, ...acc], []);
}

console.log("rev() ", rev([1, 2, 3, 4, 5]));
console.log("revMap() ", revMap([1, 2, 3, 4, 5]));
console.log("revReduce() ", revReduce([1, 2, 3, 4, 5]));

function missingNumber(arr) {
  const n = arr.length + 1; // The full sequence should have N+1 elements
  const expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to N
  const actualSum = arr.reduce((previous, current) => previous + current, 0);
  return expectedSum - actualSum;
}

console.log("missingNumber() ", missingNumber([1, 2, 4, 5]));
console.log("missingNumber() ", missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14]));