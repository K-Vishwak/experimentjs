const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { ContentType: "text/plain" });
    res.end("Hello Text Message!");
  } else if (req.url === "/html") {
    res.writeHead(200, { ContentType: "text/html" });
    res.end("<h1>Hello, HTML Message!</h1>");
  } else if (req.url === "/json") {
    res.writeHead(200, { ContentType: "application/json" });
    res.end(
      JSON.stringify({
        firstName: "I am Json",
        lastName: "response",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

server.listen(3000);
