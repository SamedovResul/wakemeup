const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("test", (data) => {
    console.log(data);
    socket.broadcast.emit("response", data);
  });
});

server.listen(5000, () => console.log("server at 5000 port"));
