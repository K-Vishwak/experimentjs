let keys = [];
let values = [];

const testObj = {
  id: "1",
  name: "urstrulyvishwak",
  about: "JS Content creator"
};

for (const key in testObj) {
  keys.push(key);
  values.push(testObj[key]);
}
console.log("Keys in Object: " + keys);
console.log("Keys in Object: " + values);