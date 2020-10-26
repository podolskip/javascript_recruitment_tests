const a1 = 'a1';
const a2 = 'a2';

const functionThatPrintsA1 = function(){
  const a2 = 'a2 inside function'; 
  console.log(a1) // 'a1
  console.log(a2) // 'a2 inside function'
}

functionThatPrintsA1();

(function(){
  const a2 = 'a2 inside IIFE'; 
  console.log(a1);
  console.log(a2);
})();


const a = {
  f1: function() { console.log(this)},
  f2: function() { console.log(this)}
};

const b = a.f1(); // { f1: [Function: f1], f2: [Function: f2] }
const c = a.f2(); // { f1: [Function: f1], f2: [Function: f2] }

const d = a.f1;
d(); // this => window

obj1 = { a: 0 , b: { c: 0}};
let obj3 = JSON.parse(JSON.stringify(obj1));
obj1.a = 4;
obj1.b.c = 4;
console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}