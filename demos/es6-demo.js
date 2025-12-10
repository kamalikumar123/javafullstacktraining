const name = "Kamali";
let age = 27;
age = 28;
const sum = (a, b) => a + b;
console.log(`Name: ${name}, Age: ${age}, Sum: ${sum(5,3)}`);

const person = { name: "Hema", city: "Chennai" };
const { name: n, city } = person;
console.log(`Person: ${n}, City: ${city}`);
