const fs = require("http");

const server = fs.createServer((req, res) => {
  const json = {
    firstName: "Vishwak",
    lastName: "K",
  };
  res.writeHead(200, { ContentType: "application/json" });
  res.end(JSON.stringify(json));
});

server.listen(3000);
