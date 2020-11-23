const map = (array, instructions) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
};

const multiplyBy2 = num => num * 2;
const result = map([1, 2, 3], multiplyBy2);
console.log(result);

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const array2 = array1.map((v, i) => {
  console.log("value", v);
  console.log("index", i);
  return v * 2;
});
console.log("array2", array2);
