const username = document.getElementById("username");

const socket = io();

socket.on("connect", () => {
  console.log("Connected to Server!");
});

const onlineUsers = document.querySelector(".online-users");
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const input = document.getElementById("input");
const button = document.getElementById("myButton");
const messages = document.getElementById("messages");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
    sidebar.classList.remove("open");
  }
});

const p = document.createElement("p");

let message;

socket.on("online users", (users) => {
  onlineUsers.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    onlineUsers.appendChild(li);
  });
});

socket.on("User Joined!", (name) => {
  p.classList.add("joined-message");

  p.textContent = `${name} has joined.`;

  messages.appendChild(p);
});

socket.on("User Left!", (name) => {
  p.classList.add("left-message");
  p.textContent = `${name} has left.`;
  messages.appendChild(p);
});

socket.on("chat message", (data) => {
  const p = document.createElement("p");

  if (data.username === username.value) {
    p.classList.add("my-message");
  }

  p.classList.add("message");

  p.innerHTML = `<strong>${data.username}</strong> : ${data.message} <small>${data.time}</small>`;

  messages.appendChild(p);

  messages.scrollTop = messages.scrollHeight;
});

socket.on("Username taken", (message) => {
  p.textContent = `${message}`;
});

socket.on("username accepted", () => {
  p.textContent = `Your username was accepted`;
  socket.username = username.value;
  console.log("username accepted!");
  socket.emit("chat message", {
    username: username.value,
    message: message,
  });
  username.classList.add("username-fall");
  username.disabled = true;
});

button.addEventListener("click", () => {
  message = input.value;

  if (message === "" || username.value.trim() === "") {
    return;
  }

  if (!socket.username) {
    socket.emit("User Joined!", username.value);
  } else {
    socket.emit("chat message", {
      username: username.value,
      message: message,
    });
  }
  input.value = "";
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});
