const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello Http!");
  console.log(req);
});

server.listen(3000, () => {
  console.log("Server started running on port 3000");
});
