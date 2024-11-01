const fs = require("fs");
const a = 100;

setImmediate(() => console.log("SET IMMEDIATE"));

Promise.resolve("Promise").then(() => console.log("Promise"));

fs.readFile("/file.txt", "utf8", () => {
    console.log("File read CB");
});

setTimeout(() => {
    console.log("setTimeout CB");
}, 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
    console.log("a=", a);
};

printA();
console.log("End of the program");