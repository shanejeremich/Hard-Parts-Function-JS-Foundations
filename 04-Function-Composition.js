// Risky and people can overwrite - not the best way to do it
const multiplyBy2 = n => n * 2;
const add3 = n => n + 3;
const divideBy5 = n => n / 5;
const subtract4 = n => n - 4;

const initialResult = multiplyBy2(11);
const nextStep = add3(initialResult);
const finalStep = divideBy5(nextStep);

// console.log("Final Step", finalStep);

// I prefer my functions to be more referentially transparent
const runFunctionOnInput = (input, fn) => {
  console.log("fn", fn);
  console.log("input", input);
  return fn(input);
};

const reduce = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
};
// prettier-ignore
const output = reduce([
  multiplyBy2, 
  add3, 
  divideBy5, 
  subtract4,
], 
runFunctionOnInput, 11);
// reduce = (array, howToCombine, buildingUp)
//          PASSING ARGUMENTS INTO THE PARAMETERS
// reduce = array:        [multiplyBy2, add3, divideBy5]
//          howToCombine: runFunctionOnInput
//          buildingUp:   11
console.log("output", output);
