function calculate(operation, numbers) {
    return operation(numbers);
}

function addition(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum+=number;
    }
    return sum;
}

function multiply(numbers) {
    let sum = 1;
    for (const number of numbers) {
        sum*=number;
    }
    return sum;
}

const numbers = [1,2,3,4,5];
console.log(calculate(addition, numbers));
> 15

console.log(calculate(multiply, numbers));
> 120