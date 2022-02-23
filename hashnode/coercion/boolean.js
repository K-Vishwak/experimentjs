// Logical context. if statement evaluates to boolean and hence the execution proceeded based on result.

// Here number coerced to boolean true.
if (4) {
    console.log('4 is not boolean');
}

// evaluated with coerced values as true && true and returns operand as result.

console.log(2 && 4); // 4
console.log(0 || 5); // 5
console.log(!NaN); // true