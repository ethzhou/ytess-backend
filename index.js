const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: ["https://ytess-backend.onrender.com", "44.226.145.213"] },
});

server.listen(8080, () => console.log("listneinggn g on port 8080"));

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
