function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swap elements
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        console.log("arr -->",arr)
      }
  }
  return arr;
}

// Example usage
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(bubbleSort(nums)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
