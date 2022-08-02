const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

const room = {};

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  socket.on("join room", (roomID) => {
    if (room[roomID]) {
      room[roomID].push(socket.id);
    } else {
      room[roomID] = [socket.id];
    }

    const otherUser = room[roomID].find((id) => id !== socket.id);
    if (otherUser) {
      socket.emit("other user", otherUser);
      socket.to(otherUser).emit("user joined", socket.id);
    }
  });

  socket.on("offer", (payload) => {
    io.to(payload.target).emit("offer", payload);
  });

  socket.on("answer", (payload) => {
    io.to(payload.target).emit("answer", payload);
  });

  socket.on("ice-candidate", (incoming) => {
    io.to(incoming.target).emit("ice-candidate", incoming);
  });
});

app.listen(2400, () => {
  console.log("server is now running");
});
