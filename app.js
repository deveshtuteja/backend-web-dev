require("./xyz.js") //imports one module into another
// const { calcSum, x } = require("./calculate/sum.js")
// const { calcMultiply } = require("./calculate/mutliply.js");
// import { calcSum, x } from "./sum.js";
const data = require("./data.json");
const { calcMultiply, calcSum } = require("./calculate")

var a = 10;
var b = 20;
var name = "Devesh Tuteja";

console.log(data);

calcSum(a, b);
calcMultiply(a, b);

// console.log(global);
// console.log(this); //empty object

console.log(globalThis === global);

// console.log(x);

