// method 1

const reverseArray = (arr) => {
  let newarr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newarr.push(arr[i]);
  }
  return newarr;
};
console.log(reverseArray([1, 2, 3, 4, 5]));

// method 2
arr = [1, 2, 3, 4];
arr1 = [];
arr.forEach((element) => {
  arr1.unshift(element);
});
console.log(arr1);
