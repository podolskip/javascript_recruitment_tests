var height = 172; // running in VSC debbugger does not assign window object that is 

const printHeight = function() {
  var height ;
  var weight;
  console.log(this.height); // 172
  this.height = 155;
  console.log(this.height); // 155
  console.log(height); // undefined
  console.log(this.weight); // undefined

}

printHeight(); // prints 172, 155, undefined, undefined

const printHeightUseStrict = function() {
  'use strict';
  var height ;
  var weight;
  console.log(this.height); // 172
  this.height = 155;
  console.log(this.height); // 155
  console.log(height); // undefined
  console.log(this.weight); // undefined

}

printHeightUseStrict(); // prints cannot react propery of undefined, cannot assign property to undefined;

// ###########################################################################

(function(window){

  window.age = 10;

  function Person() {
    this.age = 33;
    // when callback is returned from event loop then it looks for this object and only object available is window
    setTimeout(function(){
      console.log('this.age is :' + this.age);
    },100);

    // explicitly bind this object from function scope
    setTimeout(function(){
      console.log('this.age BIND(this) is :' + this.age);
    }.bind(this),100);

    this.displayAge = function(){
      console.log(this.age);
    };
  }

  const johnPerson = new Person();

  johnPerson.displayAge();

  // #######################################################################

  window.carSpeedLimit = 260;

  function Car() {
    this.carSpeedLimit = 333;
    setTimeout(() => {
      console.log('this.carSpeedLimit is :' + this.carSpeedLimit);
    },100);
    this.displaySpeedLimit = () => {
      console.log(this.carSpeedLimit);
    };
  }

  const sedanCar = new Car();

  sedanCar.displaySpeedLimit();

})(this);

(function(window){
  // ******* arrow functions VS normal functions ******
  
  //   Differences & Limitations:
  // - Doesn't have its own bindings to this or super, and shoudn't be used as methods.
  // - Doesn't have arguments, or new.target keywords.
  // - Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
  // - Can't be used as constructors.
  // - Can't use yield, within its body.

  // #######################################################################
  // *** CALL, APPLY, BIND ***
  // The call, apply and bind methods are NOT suitable for Arrow functions -- as they were designed to allow methods to execute within different scopes -- because Arrow functions establish "this" based on the scope the Arrow function is defined within.


  const tree = {age: 111};

  window.age = 3333;

  const addAge = function(numberToAdd) { return numberToAdd + this.age;};

  const decreaseAge = (numberToDecreace) => this.age ? this.age - numberToDecreace : -numberToDecreace;

  console.log(addAge.call(tree,0));
  console.log(decreaseAge.call(tree,0)); // will throw NaN but in normal environment will throw 3333-0

  // #######################################################################

  const animal = {
    age: 0,
    getAge: function(){
      console.log('animal\'s age is: ' + this.age, this);
    },
    getAgeArrow: ()=>{
      console.log('animal\'s age is: ' + this.age, this);
    }
  }

  animal.getAge(); // prints animal\'s age is: 0, { age: 0, getAge: [Function: getAge], getAgeArrow: [Function: getAgeArrow] }

  animal.getAgeArrow(); // prints animal\'s age is: undefined, Window {...} (or the global object)

  const elefant = {age: 33};

  animal.getAge.call(elefant);// prints animal's age is: 33 { age: 33 }
})(this)

// *** NEW *** Arrow functions cannot be used as constructor and will throw an error whe used with NEW
// var Foo = () => {};
// var foo = new Foo(); // TypeError: Foo is not a constructor

// *** PROTOTYPE *** Arrow functions do not have a prototype property
// var Foo = () => {};
// console.log(Foo.prototype); // undefined

// *** YIELD *** The yield keyword may not be used in an arrow function's body (except when permitted within functions further nested within it). As a consequence, arrow functions cannot be used as generators.
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// expected output: 0

console.log(iterator.next().value);
// expected output: 1


