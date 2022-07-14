// Currying: Splitting up function that takes multiple arguments
// into a sequence of functions that each takes its
// individual argument.
function calculation(fn) {
    switch (fn) {
        case 'add': return (a, b) => a + b;
        case 'sub': return (a, b) => a - b;
        case 'mul': return (a, b) => a * b;
        case 'div': return (a, b) => a / b;
    }
}
console.log(calculation('mul')(4, 2));