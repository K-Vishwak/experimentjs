const path = require("node:path");
console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__dirname));

console.log(path.format(path.parse(__dirname)));
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("./data.json"));
console.log(path.join("folder", "folder1"));
console.log(path.join("/folder", "folder1"));
console.log(path.join("/folder", "//folder1"));
console.log(path.join("/folder", "folder1", "../index.html"));
console.log(path.resolve("folder", "folder1"));
console.log(path.resolve("/folder", "folder1"));
console.log(path.resolve("/folder", "//folder1"));
console.log(path.resolve("folder", "folder1", "index.html"));
