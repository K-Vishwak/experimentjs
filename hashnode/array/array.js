const array = [1,2,3,4,5];

// Array Basic operations

// 1. Find the first item in the array.
console.log(array[0]);

// 2. Find the last item in the array.
console.log(array[array.length - 1]);

// 3. Addition of array values.
console.log(array.reduce((previousValue, currentValue) => previousValue += currentValue, 0));

// 4. Arrange in descending order.
console.log(array.sort((a,b) => b-a));

// 5. Arrange in ascending order.
console.log(array.sort((a, b) => a-b));

// 6. Push item to array.
array.push(6);
console.log(array);

// 7. remove item from array.
array.pop();
console.log(array);

// 8. push item from beginning of an array.
array.unshift(0);
console.log(array);

// 9. remove item from the beginning of an array
array.shift();
console.log(array);

// 10. slice array from index 3
console.log(array.slice(3));

// 10. slice array in the range.
console.log(array.slice(3, 4));

// 11. Updated 3rd item with 0 in array.
array.splice(3, 1, 0);
console.log(array);

// 12. Convert to comma separated values.
console.log(array.toString());

// 13. Convert to comma separated using array method.
console.log(array.join());

// 14. Convert array to _ separated string.
console.log(array.join('_'));

// 15. update 2 - index element with 4.
array[2] = 4;
console.log(array);

// 16. Merge two arrays.
const newArr = [6,7,8,9];
console.log(array.concat(newArr));

// 17. find max value from an array.
console.log(Math.max(...array));

// 18. find min value from an array.
console.log(Math.max(...array));

// 19. find index of a given number in array.
console.log(array.indexOf(4));

// 20. find lastIndex of given number in array.
console.log(array.lastIndexOf(4));

// 21. verify every element is greater than -1.
console.log(array.every(item => item > -1));

// 22. verify at least one element greater than 1.
console.log(array.some(item => item > 1));

// 23. Fill last two elements with number 1.
console.log(array.fill(1, 3));

// 24. Filter elements > 2;
console.log(array.filter(item => item > 2));

// 25. revers array in place.
console.log(array.reverse());



// Array Intermediate operations.

const testArray = [1,2,3,null,4, 7, 5,8,4,false, 0, 0.25];

// 1. remove falsy values from an array.
console.log(testArray.filter(Boolean));

// 2. Multiply every item with 2.
console.log(testArray.map(item => item = item * 2));

// 3. Remove duplicates from an array.
console.log(...new Set(testArray));

// OR

console.log(testArray.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
        previousValue.push(currentValue);
    }
    return previousValue;
}, []));

// 4. capture only integers from an array.
console.log(testArray.filter(item => Number.isInteger(item)));

// 5. Capture chunks of an array.
console.log(testArray);


const firstArray  = [1,2,3,4,5];
const chunks = [];
for (let i = 0; i<firstArray.length;i+=2) {
    chunks.push(firstArray.slice(i, i+2));
}
