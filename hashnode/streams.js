const fs = require("fs");

const readableStream = fs.createReadStream("./greet.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream("./greet.text");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});
