// 1. map

// What it does:
// Creates a new array by applying a function (callback) to every element of the original array.

// Returns: A new array of the same length.

//  Polyfill:
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

// Example:
const mapArr = [1, 2, 3];
const doubled = mapArr.myMap((el) => el * 2);
console.log(doubled); // [2, 4, 6]
