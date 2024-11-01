const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate CB"));

fs.readFile("/file.txt", "utf8", () => {
    console.log("File read CB");
});

setTimeout(() => {
    console.log("setTimeout CB");
}, 0);

function printA() {
    console.log("a=", a);
};

printA();
console.log("End of the program");
