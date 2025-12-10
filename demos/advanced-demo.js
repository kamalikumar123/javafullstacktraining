// 1. LET & CONST
//Block-scoped variable. Can be updated.
//Block-scoped but cannot be reassigned
let x = 10;
const y = 20;
console.log("Let/Const:", x, y);

// 2. ARROW FUNCTION
// Shorter function syntax.
const add = (a, b) => a + b;
console.log("Arrow Add:", add(5, 3));

// 3. TEMPLATE LITERALS
// Allows backtick strings with variables.
const name = "Kamali";
console.log(`Hello ${name}, welcome to ES6!`);

// 4. DESTRUCTURING
// Array
//Extract values from arrays/objects.
const nums = [100, 200];
const [n1, n2] = nums;
console.log("Array Destructure:", n1, n2);

// Object
const user = { id: 1, uname: "Kamali" };
const { id, uname } = user;
console.log("Object Destructure:", id, uname);


// 5. PROMISE
// Represents future value.
const promise = new Promise(resolve => {
  setTimeout(() => resolve("Promise Resolved!"), 1000);
});

promise.then(msg => console.log("Promise:", msg));


// 6. ASYNC / AWAIT
// Cleaner syntax for Promises.
const fetchData = async () => {
  const data = await promise;
  console.log("Async/Await:", data);
};
fetchData();

// 7. EVENT LOOP
// JavaScript is single-threaded, but the event loop manages tasks asynchronously.
console.log("Event Loop Start");

setTimeout(() => console.log("Timeout Executed"), 0);

console.log("Event Loop End");


// 8. CLOSURE
// A closure keeps access to a variable even after the function returns.
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log("Closure:", counter());
console.log("Closure:", counter());

// 9. HOISTING
// JavaScript moves declarations to top before execution.
console.log("Hoisting Example:");
console.log(a); // undefined
var a = 50;

//Global Scope

//Accessible everywhere.

//Function Scope

//Variables inside function can't be accessed outside.

//Block Scope (let, const)