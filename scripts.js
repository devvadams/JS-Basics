console.log("Hello, World!");

// Variables
const name = "Adam";
const firstName = "Abba";
const lastName = "Umar";

console.log(name);

// Constant
const interestRate = 0.3;

console.log(interestRate);

// Primitive Types
const fullName = "Adam";      // String
const age = 30;               // Number
const isApproved = true;      // Boolean
let middleName;               // Undefined
const selectedColor = null;   // Null

// Object
const person = {
    name: "Baba",
    age: 23,
    job: "Engineer"
};

// Dot notation
person.name = "Adamu";

// Bracket notation
const selection = "job";
person[selection] = "Developer";

console.log(person.name);
console.log(person.job);

// Array
const selectedColors = ["red", "blue"];

selectedColors.push("green");

console.log(selectedColors);
console.log(selectedColors.length);

// Functions
function greet(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}`;
}

console.log(greet("Garba", "Umar"));

// Function with return value
function square(number) {
    return number * number;
}

console.log(square(4));