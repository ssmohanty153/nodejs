const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.method === "GET") {
    console.log("this is a get request");
  }
  res.end("Hello World");
});
server.listen(8080, () => {
  console.log("server is running at port no 8080");
});
