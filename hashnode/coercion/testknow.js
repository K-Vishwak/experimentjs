// console.log('str' + new Date());
// console.log('4' * null);
console.log(true + true);
console.log('4' / new Date());
console.log('4' / new String());

1 + 2 + "string" 

console.log(1 == 1); // true
console.log(1 == '1'); // true - string 1 ocnverts to number. Hence both are equal.
console.log(1 == true); // true - true converts to number 1.
console.log(true == true); // true - 1 == 1 - true
console.log('true' == true); // false. String true converted to NaN. Hence result is false.
console.log('' == 0);

// Number coercion won't happen in case of null.
console.log(null == undefined); // true
console.log(null == null); // true