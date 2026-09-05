const username = document.getElementById("username");

const socket = io();

socket.on("connect", () => {
  console.log("Connected to Server!");
});

const input = document.getElementById("input");
const button = document.getElementById("myButton");
const messages = document.getElementById("messages");

const p = document.createElement("p");

let message;

socket.on("User Joined!", (name) => {
  p.classList.add("joined-message");

  p.textContent = `${name} has joined.`;

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

  username.disabled = true;

  input.value = "";
});

button.addEventListener("click", () => {
  message = input.value;

  if (message === "" || username.value.trim() === "") {
    return;
  }

  if (!socket.username) {
    socket.emit("User Joined!", username.value);
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});
