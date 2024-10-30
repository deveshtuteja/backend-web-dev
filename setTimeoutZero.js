var a = 10101010101;
var b = 20202020;

console.log("Hello World");

//this callback will only be pushed to call stack in v8 once the call stack is empty
setTimeout(() => {
    console.log("Run it ASAP");
}, 0) //trust issues with setTimeout

setTimeout(() => {
    console.log("Runs after 3sec");
}, 3000)

function mult(x, y) {
    return x * y;
}

var c = mult(a, b);

console.log("Multiplication result is:", c);
