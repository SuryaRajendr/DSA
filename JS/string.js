// Question: Write a function that reverses a given string.



// function resverseString (str) {
// return str.split('').reverse().join('')
// }

// console.log(resverseString("Welcome"))


// function withoutInbuild(str) {
//     const temp = []
//     for(let i = str.length-1; i >= 0; i --) {
//         console.log(str[i])
//         temp + temp.push(str[i])

//     }
// return temp.join('')
// }

// console.log(withoutInbuild("welcome"))



// function withoutInbuild(str) {
//     let temp = ""
//     for(let i = str.length-1; i >= 0; i --) {
//         console.log(str[i])
//         temp += str[i];

//     }
// return temp
// }

// console.log(withoutInbuild("welcome"))



//2. Question: Write a function that finds the longest word in a sentence.

// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = '';

//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }

//     return longestWord;
//   }

//   console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));
//   console.log(findLongestWord("Write a function that finds the longest word in a sentence"))


//   // 3. Question: Write a function that removes duplicates from an array.

//   function removesDuplicate(arr) {
//     return [...new Set(arr)]
//   }

//   console.log(removesDuplicate([1,1,2,2,3,3,4,4]))


// removes duplicates from an array - Using foreach

//   function removeDuplicateFromArray(arr) {
//     let unique = [];
//     arr.forEach(element => {
//         console.log("!unique ====>",!unique)
//         console.log(!unique.includes(element))
//         if(!unique.includes(element)) {
//             unique.push(element)
//         }
//     });
//     return unique;
//   }

//   console.log("removeDuplicateFromArray",removeDuplicateFromArray([1,1,2,2,3,3,4,4]))


// 5. Question: Write a function that checks if a given string is a palindrome.

// function isPalindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
//     console.log("reversedStr",reversedStr)
//     return str === reversedStr;
// }

// // console.log(isPalindrome("MAMA"))
// // console.log(isPalindrome("World"))
// console.log(isPalindrome("level"))



// In sentense each wors should be reversed


// function reverseword(sentense) {
//     const splittedWord = sentense.split(' ')
//     console.log("splittedWord",splittedWord)
//     let store = ""
//     for(let i=0; i < splittedWord.length; i++) {
//         store += ' ' +splittedWord[i].split('').reverse().join('')
//     }
//  return store
// }

// console.log(reverseword("I LOVE YOU"));


const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]