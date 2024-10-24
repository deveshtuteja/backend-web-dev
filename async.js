const https = require("https")
const fs = require("fs");
const { log } = require("console");

console.log("Hello World");

var a = 19220381;
var b = 292843;

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched data successfully");

})

setTimeout(() => {
    console.log("Set timeout ran successfully after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data:", data);
});

function mult(a, b) {
    const result = a * b;
    return result;
}

var c = mult(a, b);

console.log("Multiplication result:", c);
