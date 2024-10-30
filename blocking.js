const crypto = require("node:crypto");

console.log("Hello World");

var a = 19220381;
var b = 292843;

//pbkdf2 => password based key derivative function version 2

//Don't use this as it blocks the main thread. Sync fn
crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First key is generated");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Second key is generated");
})

function mult(x, y) {
    return x * y;
}

var c = mult(a, b);
console.log("Multiplication of a&b is:", c);


