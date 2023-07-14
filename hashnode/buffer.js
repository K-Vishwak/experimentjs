const buffer = new Buffer("Vishwak");

buffer.write("test");

console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer);
