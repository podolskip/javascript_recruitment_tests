

export const logicOrTest = (firstVal, secondVal) => {
  return firstVal || secondVal;
}

export const logicAndTest = (firstVal, secondVal) => {
  return firstVal && secondVal;
}

// maximum from array
export const maxValue = (arr) => {
  return;
}

// map function
export const map = (arr,mapper) => {
  return;
}

// sorted array returns sorted array
export const sort = (arr) => {
  return;
}

// returns sorted values from arguments 
export const sortArguments = () => {
  // arguments
  return;
}

// filter method
export const filter = (arr) => {
  return;
}

// unique values and sorted
export const uniq = (arr) => {
  return;
}

// Flatten is a function that puts elements from the inner arrays into the top array.
// deepFlatten([1, [2], [[3], [4, [5]]]]); // => [1, 2, 3, 4, 5]
export const deepFlatten = (arr) => {
  return arr.reduce(
    (acc, el) =>
      Array.isArray(el) ? [...acc, ...deepFlatten(el)] : [...acc, el],
    []
  );
}

// delete property from a given object
export const deleteProperty = (obj, key) => {
  return;
}

// return mutable unique array [1,2,1,5,2,2,6] => [1,2,5,6]
export const mutableUnique = (arr) => {
  return;
} 

// curry functions


// memoize function
// It wraps a given function and only runs it once for a list of parameters, saves the result in inner cache and return it the next time.
export const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    const key = args.join("-");
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}

// that adds repetify method to object passes
export const addToObject = (obj) => {
  // protorype
  return;
}

// JSON stringify and parse


