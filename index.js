const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "https://ethzhou.github.io",
    ],
  },
});

// Use 8080 for production and 8081 for development
const PORT = 8081;
server.listen(PORT, () => console.log(`listneinggn g on port ${8081}`));

io.on("connection", socket => {
  console.log(`User connection: ${socket.id}`);

  socket.on("meemee", message => {
    console.log(`message ${message}`);
    io.emit("messageevent", `${socket.id.slice(0, 2)} said ${message}`);
  });
});

/* 
  https://www.youtube.com/watch?v=1BfCnjr_Vjg
  https://ourcodeworld.com/articles/read/272/how-to-use-socket-io-properly-with-express-framework-in-node-js 
*/
