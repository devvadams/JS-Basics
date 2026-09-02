console.log("Hello, World!");
let  name = "Adam";

let firstName = "Abba";
let lastName = "Umar";
console.log(name);

//const
const interrestRate = 0.3;
console.log(interrestRate);

//Primitives Types 

let names = "Adam"; //String Literal
let age = 30;//Number Literal
let isApproved = true;
let middleName = undefined;
let selectedColor = null;

//Objects
let persion = {
    "name": "Baba",
     age: 23,
    "job": "Engineer"
}
//Dot Notation
persion.name = "Adamu";
//Bracket Notation
let selection = "job";
persion["job"] = "developer";
console.log(persion.name);
console.log(persion.job);
//Arrays
let selectedColors = ["red","blue"];
selectedColors[2] = "green";
selectedColors[3] = 10;
console.log(selectedColors);
console.log(selectedColors.length);

//Functions
function greet(firstname, lastName){
    console.log("Hello, "+ firstname + " " + lastName);
}
greet("Garba", "Umar");

function square(number){
    return number * number;
}

console.log(square(4));