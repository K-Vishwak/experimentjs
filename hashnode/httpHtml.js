const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  //   fs.createReadStream("./index.html").pipe(res);
  const read = fs.readFileSync("./index.html", "utf-8");
  res.end(read);
});

server.listen(3000);
