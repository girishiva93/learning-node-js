const fs = require("fs");
const http = require("http");

// SERVER - creating server using createserver and pass them callback function and execute the time
const server = http.createServer((req, res) => {
  res.end("Hello from the server!! Testing");
});

// accept parameters like port
server.listen(8000, "127.0.0.1", () => {
  console.log("Server has been started on part 8000");
});
