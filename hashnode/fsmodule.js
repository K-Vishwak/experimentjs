const fs = require("fs");

const readContents = fs.readFileSync("./text.txt", "utf-8");
console.log(readContents);

fs.readFile("./text.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fs.writeFileSync("./greet.txt", "Hello Writing!");
fs.writeFile("./greet.txt", "Hello Vishwak", { flag: "a" }, (error) => {
  if (error) {
    console.log(error);
  }
});
