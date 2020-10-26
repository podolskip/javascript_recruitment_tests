

export const logicOrTest = (firstVal, secondVal) => {
  return firstVal || secondVal;
}

export const logicAndTest = (firstVal, secondVal) => {
  return firstVal && secondVal;
}

// maximum from array
export const maxValue = function(arr) {
  return Math.max(arr);
}

// check if object is an array or not
export const isObjectAnArray = function(objectToCheck){
  // return Object.prototype.toString.call(objectToCheck) === '[object Array]';
  return Array.isArray(objectToCheck);
}

// map function
export const map = (arr,mapper) => {
  if(Array.isArray(arr)){
    let newArrayToReturn = [];
    for(let arrIndex = 0; arrIndex < arr.length; arrIndex ++){
      newArrayToReturn.push(mapper(arr[arrIndex]));
    }
    return newArrayToReturn;
  } else {
    throw Error(" First property is not an Array type but is" + (typeof arr));
  }
}

// sorted array returns sorted array
export const sort = (arr) => {
  if(Array.isArray(arr)){
    return arr.sort(function(a,b){return a-b});
  } else {
    throw Error(" First property is not an Array type but is" + (typeof arr));
  }
}

// arguments ||  returns sorted values from arguments 
export const sortArguments = function() {
  let newArra = [...arguments]
    .sort(function(a,b){
      return a-b;
  });
  console.log(newArra);
  return newArra;
}

sortArguments(1,2,36,7);

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

// prototype || that adds repetify method to object passes 
export const addToObject = (obj) => {
  if(obj.prototype){
    obj.prototype.repetyfy = obj.prototype.repetyfy || function(numberOfRepeats){
      let repeatResponse= '';
      if(typeof numberOfRepeats === "number"){
        for(let repeatNumber = 0; repeatNumber < numberOfRepeats; repeatNumber ++){
          repeatResponse +=this.toString();
        }
        return repeatResponse;

      } else {
        throw Error(" Property you provided is not in number format but is " + (typeof numberOfRepeats));
      }
    }
    return obj;
  } else {
    throw Error(" You provided wrong object type: " + (typeof obj));
  }

}

const newObject = "aaa" ;
addToObject(String);

console.log(newObject.repetyfy(3));

// JSON stringify and parse, return immutable json
export const returnImmutableJson = function(jsonToMakeImmutable){
  if(jsonToMakeImmutable !== null && typeof jsonToMakeImmutable === 'object'){
    return JSON.parse(JSON.stringify(jsonToMakeImmutable));
  } else {
    return 'It looks like that argument you provided is not in JSON format';
  }
}


// return callback with passed argument
export const callbackReturn = function(callbackFunction, arguments){
  return callbackFunction(arguments);
}


// given a string reverse each word in the sentence

export const reverseSentence = function(sentence, separator){
  if(typeof sentence === 'string' ){
    return sentence.split(separator).reverse().join();
  } else {
    return 'sentence argument is not a string'
  }
}

// empty array and array passed by function property
export const emptyArray = function(arrayToEmpty){
  if(Array.isArray(arrayToEmpty)){
    arrayToEmpty.length = 0;
    arrayToEmpty = [];
    arrayToEmpty.splice(0,arrayToEmpty.length);
    return arrayToEmpty;
  } else{
    return 'returned argument is not an array';
  }
}

// check if number is an integer
export const isNumberAnInteger = function(numberToCheck){
  if(typeof numberToCheck === 'number') {
    return numberToCheck % 1 === 0;
  } else {
    return 'property you provided is not a number';
  }
}

// return duplicated array 
export const duplicatedArray = function(arrayToDuplicate){
  if(Array.isArray(arrayToDuplicate)){
    // return [...arrayToDuplicate,...arrayToDuplicate];
    return arrayToDuplicate.concat(arrayToDuplicate);
  } else {
    return 'function argument you provided isn\'t an array';
  }
  
}


// curryng return base and then provide added property
export const createBase = function(baseNumber){
  return function(addedElement){
    return baseNumber + addedElement;
  }
}

const addTen = createBase(10);
console.log(addTen(13));
console.log(addTen(1));

//  to create object with a private counter
export const privateCounter = function(){
  let _counter = 0;
  return {
    add: function(numberToAdd){
      _counter += numberToAdd;
    },
    get: function(){
      return _counter;
    }
  };
}

const newModule = privateCounter();
newModule.add(12);
newModule.add(11);
console.log(newModule.get());

// assign given object a new value with a given property:
export const assignNewValue = function(obj,property,newValue){
  obj[property] = newValue;
  return obj;
}

const objectToPass = {
  variableToChange: 33
};

assignNewValue(objectToPass,"variableToChange",11);

console.log(objectToPass);