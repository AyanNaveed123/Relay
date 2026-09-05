import express from "express";
import http from "http";
import { Server } from "socket.io";
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.static('login-page'));
app.use(express.static("public"));
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server);
const usernames = [];

io.on("connection", (socket) => {
  console.log("A user connected.");

  socket.on("User Joined!", (name) => {
    if (usernames.includes(name)) {
      socket.emit("Username taken", "That Username is already taken!");
      return;
    }
    usernames.push(name);
    socket.emit("username accepted");

    io.emit("User Joined!", name);
  });

  socket.on("chat message", (data) => {
    console.log(data.username);
    console.log(data.message);

    data.time = new Date().toLocaleTimeString();

    io.emit("chat message", data);
  });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const salt = crypto.randomBytes(16).toString('hex');
  crypto.scrypt(password, salt, 64, (error, hashed) => {
    const user = {
      name, 
      email, 
      passwordHash: hashed.toString('hex'),
      salt
    }
    console.log(user);
  })
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
