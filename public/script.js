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
const moveButton = document.getElementById("moveCircles");
const p5 = document.getElementById("typing");
const searchInput = document.getElementById("searchInput");

let moved = false;
let timingTimer;

if (Notification.permission === "default") {
  Notification.requestPermission();
}

moveButton.addEventListener("click", () => {
  if (!moved) {
    document.body.style.setProperty("--x1", "30%");
    document.body.style.setProperty("--y1", "30%");
    document.body.style.setProperty("--x2", "70%");
    document.body.style.setProperty("--y2", "70%");
    document.body.style.setProperty("--x3", "30%");
    document.body.style.setProperty("--y3", "70%");
    moved = true;
  } else {
    document.body.style.setProperty("--x1", "70%");
    document.body.style.setProperty("--y1", "70%");
    document.body.style.setProperty("--x2", "30%");
    document.body.style.setProperty("--y2", "30%");
    document.body.style.setProperty("--x3", "70%");
    document.body.style.setProperty("--y3", "30%");
    moved = false;
  }
  console.log(getComputedStyle(document.body).getPropertyValue("--x1"));
});

searchInput.addEventListener("input", (event) => {
  const searchText = searchInput.value.toLowerCase();

  [...messages.children].forEach((message) => {
    if(message.textContent.toLowerCase().includes(searchText)){
      message.style.display = '';
    }
    else{
      message.style.display = 'none';
    }
  })
  
});
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
  onlineUsers.querySelectorAll("li").forEach((li) => {
    if (li.textContent === name) {
      li.classList.add("fade-out");
      li.addEventListener("animationend", () => {
        li.remove();

        onlineUsers
          .querySelectorAll("li")
          .forEach((li) => li.classList.add("slide-up"));
      });
    }
  });
  p.classList.add("left-message");
  p.textContent = `${name} has left.`;
  messages.appendChild(p);
});

socket.on("old messages", (oldMessages) => {
  oldMessages.forEach((data) => {
    const p = document.createElement("p");
    p.classList.add("message");
    p.innerHTML = `<strong>${data.username}</strong> : ${data.message} <small>${data.time}</small>`;
    messages.appendChild(p);
  });

  messages.scrollTop = messages.scrollHeight;
});

socket.on("chat message", (data) => {
  const p = document.createElement("p");

  let marker = "";
  if (data.username === username.value) {
    marker = "✓";
    p.classList.add("my-message");
  }

  console.log(Notification.permission);

  p.classList.add("message");
  p.dataset.messageId = data._id;

  p.innerHTML = `<strong>${data.username}</strong> : ${data.message} <small>${data.time} <span class='marker'>${marker}</span></small>`;

  messages.appendChild(p);

  if (data.username !== username.value) {
    socket.emit("message read", data._id);
  }

  if (
    data.username !== username.value &&
    Notification.permission === "granted"
  ) {
    new Notification(data.username, {
      body: data.message,
    });
  }

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

  username.addEventListener('animationend', () => {
    username.style.display = 'none';
  })

  username.disabled = true;
});

socket.on("typing", (username) => {
  p5.textContent = `${username} is typing...`;

  clearTimeout(timingTimer);
  timingTimer = setTimeout(() => {
    p5.textContent = "";
  }, 1000);
});

socket.on("message read", (messageId) => {
  console.log(`message read: ${messageId}`);

  const messageElement = [...messages.children].find(
    (element) => element.dataset.messageId === messageId
  );
  messageElement.querySelector('.marker').textContent = '✓✓';
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

input.addEventListener("input", () => {
  socket.emit("typing", username.value);
});
