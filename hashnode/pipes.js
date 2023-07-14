const fs = require("fs");

const readableStream = fs.createReadStream("./greet.txt", {
  encoding: "utf-8",
});

const writableStream = fs.createWriteStream("./greet.text");

readableStream.pipe(writableStream);
