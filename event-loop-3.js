const fs = require("fs");

setImmediate(() => console.log("SET IMMEDIATE"));

Promise.resolve("Promise").then(() => console.log("Promise"));

fs.readFile("/file.txt", "utf8", () => {
    setTimeout(() => {
        console.log("setTimeout CB 2");
    }, 0);
    setImmediate(() => console.log("SET IMMEDIATE 2"));
    process.nextTick(() => console.log("process.nextTick 2"));
    console.log("File read CB");
});

setTimeout(() => {
    console.log("setTimeout CB");
}, 0);

process.nextTick(() => console.log("process.nextTick 1"));

console.log("End of the program");