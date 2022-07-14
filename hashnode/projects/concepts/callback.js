// callback: A function passed as an argument to another
// function is called callback. Callback function gets executed 
// after the main function. Very much useful in asynchronous functions.

function calculation(a, b, fn, fn1) {
    return fn(a, b) + fn1(a,b);
}

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

console.log(calculation(4, 2, mul, add));

// While sending function as an argument ignore appending parenthesis to it. 
// In console, we call mul() function as mul just.