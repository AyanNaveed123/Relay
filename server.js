import express from "express";
import http from "http";
import { Server } from "socket.io";
import crypto from "crypto";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
const client = new MongoClient(process.env.MONGO_URI);
client.connect().then(() => {
  console.log("Connected to MongoDB");
});
const db = client.db("Relay");
const users = db.collection("users");
app.use("/", express.static("login-page"));
app.use("/app", express.static("public"));
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server);
const usernames = [];

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  users.findOne({ email }).then((user) => {
    if (!user) {
      res.json({ success: false, message: "User not found" });
      return;
    }  
    const passwordHash = crypto.scryptSync(password, user.salt, 64).toString("hex");
    if (passwordHash === user.passwordHash) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.json({ success: false, message: "Incorrect password" });
    }
  });
});

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

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const salt = crypto.randomBytes(16).toString("hex");
  crypto.scrypt(password, salt, 64, (error, hashed) => {
    const user = {
      name,
      email,
      passwordHash: hashed.toString("hex"),
      salt,
    };
    users.insertOne(user).then(() => {
      console.log("User inserted into MongoDB");
      res.json({ success: true, message: "User registered successfully" });
    });
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on Port ${PORT}`);
});
