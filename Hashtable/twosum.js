function twoSum(nums, target) {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashTable[complement] !== undefined) {
      return [i, hashTable[complement]];
    }

    hashTable[nums[i]] = i;
  }

  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);

console.log(result); // [0, 1]