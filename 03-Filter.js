const add = (a, b) => a + b;
const array = [1, 2, 3, 4, 5, 6];
const greaterThan2 = num => num > 2;

const filterArray = array.filter(greaterThan2);
console.log(filterArray); // [3, 4, 5, 6]

const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add, 0);
console.log(sumOfGreaterThan2);

// words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// const appendedWords = words.filter((word, index, arr) => {
//   console.log(word);
//   console.log(index);
//   console.log(arr);
//   return word.length < 6;
// });

// console.log("newArray", appendedWords);
// // Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// // ["spray" ,"limit" ,"elite"]
