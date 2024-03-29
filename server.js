const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 5000;
app.use(cors());
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("location", (data) => {
    socket.broadcast.emit("location", data);
  });
  socket.on("address", (data) => {
    socket.broadcast.emit("address", data);
  });
});

server.listen(port, () => console.log(`server listen at ${port}`));
