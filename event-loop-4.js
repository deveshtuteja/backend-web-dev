const fs = require("fs");

setImmediate(() => console.log("SET IMMEDIATE"));

Promise.resolve("Promise").then(console.log);

fs.readFile("/file.txt", "utf8", () => {
    console.log("File read CB");
});

setTimeout(() => {
    console.log("setTimeout CB");
}, 0);

process.nextTick(() => {
    process.nextTick(() => console.log("Inner nextTick"));
    console.log("outer process.nextTick");
});

console.log("End of the program");