const testObj = {
    id: "1",
    name: "urstrulyvishwak",
    about: "JS Content creator"
  };

// Using Object.entries.
const keys = [];
const values = [];
Object.entries(testObj).forEach(([key, value]) => {
    keys.push(key);
    values.push(value);
});

console.log("Keys in Object: " + keys);
console.log("Values in Object: " + values);
// > Keys in Object: id,name,about
// > Values in Object: 1,urstrulyvishwak,JS Content creator

// Using Object.values
console.log('Values are: ' + Object.values(testObj));

// > Values are: 1,urstrulyvishwak,JS Content creator
  
// Using Object.Keys -  this was introduced in ES 2015
console.log('Keys are: ' + Object.keys(testObj));

// > Keys are: id,name,about