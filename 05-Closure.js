const functionCreator = () => {
  let counter = 0;
  const add3 = num => {
    const result = num + 3;
    return result;
  };
  return add3;
};

const generatedFun = functionCreator();
const result = generatedFun(2); // 5
console.log(result);

/**
 * Inner Function
 */

const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
    console.log(counter);
  };
  return incrementCounter;
};

const newFunction = outer();
newFunction();
newFunction();
