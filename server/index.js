const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
require("./utils/db");
const room = {};

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./router/userRouter"));

app.listen(2400, () => {
  console.log("server is now running");
});
