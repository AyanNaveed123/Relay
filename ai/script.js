const responses = {
  // Greetings
  hello: "Hello there! How can I help you today?",
  hey: "Hey there! How can I help you today?",
  hi: "Hi there! How can I help you today?",
  "good morning": "Good morning! Ready to use Relay? ☀️",
  "good afternoon": "Good afternoon! How can I help?",
  "good evening": "Good evening! What can I help you with?",
  yo: "Yo! What's up? 😎",

  // About Relay
  "what is relay?":
    "Relay is a real-time chat app designed to help you stay connected with friends and family.",

  "what is relay":
    "Relay is a real-time chat app designed to help you stay connected with friends and family.",

  "tell me about relay":
    "Relay is a real-time chat application focused on simple, fast communication between connected users.",

  "what does relay do?":
    "Relay lets users create accounts, log in, choose usernames, and communicate through real-time chat.",

  "what is the purpose of relay?":
    "Relay's purpose is to provide a simple way for people to communicate with each other in real-time.",

  "why is it called relay?":
    "The name Relay represents passing messages from one person to another, just like a relay passes something along.",

  "who made relay?":
    "Relay was created as a personal coding project.",

  "who created relay?":
    "Relay was created as a personal coding project.",

  "who is the developer?":
    "Relay was developed as a personal coding project.",

  "when was relay made?":
    "Relay is an evolving project, so its features and development continue to change over time.",

  // Getting started
  "how do i use it?":
    "To use Relay, create an account, log in, choose a username, and start chatting in real-time.",

  "how do i use relay?":
    "Create an account, log in, choose a username, and then you can start chatting.",

  "how do i get started?":
    "Create a Relay account and log in. After that, choose a username and start chatting.",

  "how do i start?":
    "Create an account, log in, choose a username, and send your first message.",

  "how do i join?":
    "Log in to Relay, choose an available username, and you'll be able to join the chat.",

  "how do i create an account?":
    "Use the registration page to enter your name, email, and password, then create your Relay account.",

  "how do i register?":
    "Go to the registration page and enter the required information to create your Relay account.",

  "how do i log in?":
    "Enter your registered email and password on the login page.",

  "i can't log in":
    "Make sure you're using the email and password associated with your Relay account.",

  "i forgot my password":
    "Password recovery isn't currently implemented in Relay.",

  // Features
  "what are the features of relay?":
    "Relay currently includes real-time chat, online user tracking, a chatbot, account registration, and login.",

  "what features does relay have?":
    "Relay includes real-time messaging, online user tracking, account registration, login, and its built-in AI chatbot.",

  "what can relay do?":
    "Relay can handle user accounts, authentication, real-time messaging, online-user tracking, and chatbot responses.",

  "does relay have chat?":
    "Yes! Real-time chat is one of Relay's main features.",

  "does relay have an ai?":
    "Yes! Relay includes a built-in chatbot designed to answer questions and help users.",

  "does relay have a chatbot?":
    "Yes. Relay has a built-in rule-based chatbot.",

  "does relay have accounts?":
    "Yes. Relay supports account registration and login.",

  "does relay have usernames?":
    "Yes. Users choose a username when joining the chat.",

  "does relay show online users?":
    "Yes. Relay can display users who are currently connected to the chat.",

  // Chat
  "what is real time chat?":
    "Real-time chat lets messages appear for connected users immediately instead of requiring the page to be refreshed.",

  "what does real time mean?":
    "Real-time means messages are delivered to connected users immediately without manually refreshing the page.",

  "how does the chat work?":
    "Relay uses real-time communication so connected users can send and receive messages instantly.",

  "can i chat with my friends?":
    "Yes! That's one of Relay's main purposes. You can chat with other connected users in real-time.",

  "can multiple people chat?":
    "Yes. Multiple connected users can participate in the same Relay chat.",

  "can i send messages?":
    "Yes! Choose a username and type your message into the chat input.",

  "do messages update automatically?":
    "Yes. Relay's real-time messaging system updates connected clients without requiring a page refresh.",

  // Online users
  "what are online users?":
    "Online users are people currently connected to the Relay chat.",

  "can i see who is online?":
    "Yes. Open the online-users menu to see the users currently connected.",

  "why did someone disappear from online users?":
    "They may have disconnected or left the Relay chat.",

  "what happens when someone leaves?":
    "Relay removes them from the online-user list and displays a message showing that they left.",

  "what happens when someone joins?":
    "Relay adds them to the online-user list and displays a join notification.",

  // Usernames
  "what is a username?":
    "A username is the name you use to identify yourself in the Relay chat.",

  "why do i need a username?":
    "Relay uses usernames to identify who sent each message.",

  "can i change my username?":
    "Currently, your username is locked after it has been accepted for the current chat session.",

  "can two people have the same username?":
    "No. Relay prevents two connected users from using the same username.",

  "what happens if my username is taken?":
    "Relay will tell you that the username is already taken, and you'll need to choose another one.",

  // Mobile
  "can i use relay on my phone?":
    "Relay is designed as a web app, so you can access it from a phone browser as long as the site is available.",

  "does relay work on mobile?":
    "Relay can be accessed through a mobile web browser.",

  "can i use relay on pc?":
    "Yes. Relay works as a web application on a computer.",

  "can i use relay on a laptop?":
    "Yes. You can use Relay through a web browser on a laptop.",

  // AI
  "what is the chatbot?":
    "The Relay chatbot is a small rule-based AI that matches questions with keywords and chooses the most relevant response.",

  "how does the chatbot work?":
    "I look for keywords in your question, give possible answers scores based on matching words, and choose the answer with the highest score.",

  "are you ai?":
    "I'm Relay's built-in chatbot. Right now, I'm a rule-based AI rather than a large language model.",

  "are you a bot?":
    "Yes, I'm a chatbot built into Relay.",

  "are you real?":
    "I'm real software, but I'm not a human. I'm a rule-based chatbot.",

  "are you human?":
    "No, I'm not human. I'm a chatbot built for Relay.",

  "are you smart?":
    "I'm getting smarter! Right now, I use keywords and scoring to figure out what you're asking.",

  "do you learn?":
    "Not automatically. My responses are programmed by the developer.",

  "can you learn?":
    "I don't currently learn from conversations automatically, but my programming can be updated with new knowledge and responses.",

  "do you remember me?":
    "No. I don't currently have long-term memory between conversations.",

  "do you have feelings?":
    "No. I don't have feelings, but I can still respond to your questions.",

  "do you have a brain?":
    "Not literally! My responses come from JavaScript logic and programmed rules.",

  "what can you do?":
    "I can answer questions about Relay, explain its features, help users understand how it works, and perform simple calculations.",

  "do you have any limits?":
    "Yes. I'm a rule-based chatbot, so I can only answer questions I've been programmed to understand.",

  "are you only about relay?":
    "Yes. I'm designed primarily to answer questions about Relay and its features.",

  // Technology
  "what is relay made with?":
    "Relay is built using web technologies including HTML, CSS, JavaScript, Node.js, Express, Socket.IO, and MongoDB.",

  "what programming language is relay written in?":
    "Relay uses JavaScript for its main application logic, along with HTML and CSS for the frontend.",

  "what backend does relay use?":
    "Relay uses Node.js with Express for its backend.",

  "what database does relay use?":
    "Relay uses MongoDB to store user account information.",

  "what is socket io?":
    "Socket.IO is used by Relay to enable real-time communication between the server and connected clients.",

  "what is mongodb?":
    "MongoDB is the database system Relay uses to store information such as user accounts.",

  "what is node js?":
    "Node.js allows JavaScript to run outside the browser and is used by Relay for its server-side code.",

  "what is express?":
    "Express is a Node.js web framework used by Relay to handle routes, requests, and serving files.",

  // Security
  "is relay secure?":
    "Relay uses password hashing and other server-side logic, but its security can continue to improve as development progresses.",

  "are passwords stored?":
    "Relay stores password hashes rather than storing passwords directly.",

  "are passwords encrypted?":
    "Relay uses password hashing with a salt rather than storing passwords as plain text.",

  "is my password safe?":
    "Relay hashes passwords before storing them, but users should always use strong, unique passwords.",

  // Availability
  "is relay free?":
    "Relay is currently a personal project, so its availability and features may change as development continues.",

  "is relay public?":
    "Relay's availability depends on where the project is currently being hosted.",

  "does relay require an account?":
    "Yes. The current Relay setup uses account registration and login before entering the app.",

  // Help
  "can you help me?":
    "Of course! Ask me something about Relay and I'll try to help.",

  "can you help me with something?":
    "Sure! Ask me something about Relay and I'll try to help.",

  "what should i do?":
    "If you're new to Relay, start by creating an account and logging in.",

  "i need help":
    "Sure! Tell me what you're having trouble with in Relay.",

  "relay isn't working":
    "Try refreshing the page first. If the problem continues, check the browser console for errors or contact the developer.",

  // Personality
  "what is your name?":
    "My name is Relay. How can I help you today?",

  "who are you?":
    "I'm Relay's built-in chatbot. I can answer questions about Relay and its features.",

  "do you like relay?":
    "I might be a little biased... 😎",

  "do you like coding?":
    "I literally exist because of code, so I'd say we're pretty close. 😎",

  "are you funny?":
    "I try my best. My jokes have a questionable success rate though. 💀",

  // Thanks / goodbye
  thanks: "You're welcome! 😎",
  "thank you": "You're welcome! Happy to help.",
  "thanks relay": "You're welcome! Glad I could help. 😎",
  bye: "Goodbye! See you on Relay.",
  goodbye: "Goodbye! See you later!",
  "see you": "See you later! 👋",
  "good night": "Good night! See you on Relay. 🌙",
};

const keywords = {
  relay: "what is relay?",
  app: "what is relay?",
  chat: "what is real time chat?",
  tell: "tell me about relay",
  does: "what does relay do?",
  purpose: "what is the purpose of relay?",
  called: "why is it called relay?",

  use: "how do i use it?",
  using: "how do i use it?",
  login: "how do i log in?",
  log: "how do i log in?",
  username: "why do i need a username?",
  join: "how do i join?",
  register: "how do i register?",
  registration: "how do i register?",
  create: "how do i create an account?",
  password: "i forgot my password",
  forgot: "i forgot my password",

  features: "what are the features of relay?",
  feature: "what are the features of relay?",
  capabilities: "what can relay do?",

  phone: "can i use relay on my phone?",
  mobile: "does relay work on mobile?",
  browser: "can i use relay on my phone?",
  pc: "can i use relay on pc?",
  computer: "can i use relay on pc?",
  laptop: "can i use relay on a laptop?",

  get: "how do i get started?",
  started: "how do i get started?",
  start: "how do i get started?",
  account: "does relay require an account?",

  information: "where can i find more information about relay?",
  website: "where can i find more information about relay?",
  documentation: "where can i find more information about relay?",

  contact: "how can i contact you?",

  name: "what is your name?",
  who: "who are you?",

  do: "what can you do?",
  tasks: "what can you do?",

  help: "can you help me?",

  limits: "do you have any limits?",
  limited: "do you have any limits?",

  bot: "are you a bot?",
  chatbot: "what is the chatbot?",

  real: "are you real?",
  human: "are you human?",
  smart: "are you smart?",
  intelligent: "are you smart?",
  feelings: "do you have feelings?",
  brain: "do you have a brain?",
  learn: "do you learn?",
  learning: "can you learn?",
  memory: "do you remember me?",
  remember: "do you remember me?",

  ai: "are you ai?",

  messaging: "does relay have chat?",
  message: "can i send messages?",
  messages: "can i send messages?",
  send: "can i send messages?",
  multiple: "can multiple people chat?",
  people: "can multiple people chat?",
  communication: "how does the chat work?",
  instantly: "what does real time mean?",
  automatically: "do messages update automatically?",
  update: "do messages update automatically?",
  refresh: "do messages update automatically?",

  online: "can i see who is online?",
  connected: "what are online users?",
  disappear: "why did someone disappear from online users?",
  disconnect: "why did someone disappear from online users?",
  leave: "what happens when someone leaves?",
  left: "what happens when someone leaves?",
  joined: "what happens when someone joins?",
  joining: "what happens when someone joins?",

  change: "can i change my username?",
  duplicate: "can two people have the same username?",
  same: "can two people have the same username?",
  taken: "what happens if my username is taken?",

  realtime: "what is real time chat?",
  "real-time": "what is real time chat?",

  technology: "what is relay made with?",
  tech: "what is relay made with?",
  programming: "what programming language is relay written in?",
  language: "what programming language is relay written in?",
  javascript: "what programming language is relay written in?",
  backend: "what backend does relay use?",
  server: "what backend does relay use?",
  database: "what database does relay use?",
  mongodb: "what database does relay use?",
  socket: "what is socket io?",
  socketio: "what is socket io?",
  node: "what is node js?",
  nodejs: "what is node js?",
  express: "what is express?",

  secure: "is relay secure?",
  security: "is relay secure?",
  passwords: "are passwords stored?",
  stored: "are passwords stored?",
  encrypted: "are passwords encrypted?",
  hashing: "are passwords encrypted?",
  hash: "are passwords stored?",

  free: "is relay free?",
  public: "is relay public?",
  available: "is relay public?",
  require: "does relay require an account?",
  required: "does relay require an account?",

  problem: "relay isn't working",
  issue: "relay isn't working",
  error: "relay isn't working",
  working: "relay isn't working",

  funny: "are you funny?",
  coding: "do you like coding?",
  like: "do you like relay?",

  thanks: "thanks",
  thank: "thank you",
  bye: "bye",
  goodbye: "goodbye",
  see: "see you",
  night: "good night",
};

const weights = {
  relay: 1,
  app: 2,
  chat: 2,
  tell: 2,
  does: 2,
  purpose: 3,
  called: 3,

  use: 2,
  using: 2,
  login: 3,
  log: 2,
  username: 3,
  join: 3,
  register: 3,
  registration: 3,
  create: 2,
  password: 3,
  forgot: 3,

  features: 3,
  feature: 3,
  capabilities: 3,

  phone: 3,
  mobile: 3,
  browser: 2,
  pc: 2,
  computer: 2,
  laptop: 2,

  get: 1,
  started: 2,
  start: 2,
  account: 2,

  information: 2,
  website: 2,
  documentation: 3,
  contact: 3,

  name: 3,
  who: 1,
  do: 1,
  tasks: 2,
  help: 2,

  limits: 3,
  limited: 3,
  bot: 3,
  chatbot: 3,

  real: 3,
  human: 3,
  smart: 3,
  intelligent: 3,
  feelings: 3,
  brain: 2,
  learn: 3,
  learning: 3,
  memory: 3,
  remember: 3,
  ai: 3,

  messaging: 3,
  message: 2,
  messages: 2,
  send: 2,
  multiple: 2,
  people: 2,
  communication: 2,
  instantly: 2,
  automatically: 2,
  update: 2,
  refresh: 2,

  online: 3,
  connected: 2,
  disappear: 3,
  disconnect: 3,
  leave: 2,
  left: 2,
  joined: 2,
  joining: 2,

  change: 2,
  duplicate: 3,
  same: 2,
  taken: 3,

  realtime: 3,
  "real-time": 3,

  technology: 3,
  tech: 3,
  programming: 3,
  language: 3,
  javascript: 3,
  backend: 3,
  server: 2,
  database: 3,
  mongodb: 3,
  socket: 3,
  socketio: 3,
  node: 3,
  nodejs: 3,
  express: 3,

  secure: 3,
  security: 3,
  passwords: 3,
  stored: 3,
  encrypted: 3,
  hashing: 3,
  hash: 3,

  free: 3,
  public: 2,
  available: 2,
  require: 2,
  required: 2,

  problem: 3,
  issue: 3,
  error: 3,
  working: 3,

  funny: 3,
  coding: 2,
  like: 2,

  thanks: 2,
  thank: 2,
  bye: 2,
  goodbye: 3,
  see: 2,
  night: 2,
};

const jokes = [
  "Why did the programmer quit his job? He didn't get arrays. 💀",
  "Why do programmers prefer dark mode? Because light attracts bugs. 🐛",
  "I told my code to behave... it threw an error. 😭",
  "Why was the computer cold? It left its Windows open. 🥶",
  "What do programmers do when they're hungry? They grab a byte. 🍔",
  "Why did the code refuse to move? It was stuck in a loop. 🔄",
  "Why did the programmer bring a ladder to work? He wanted to reach the high-level language. 🪜",
  "Why did the server go on vacation? It needed some downtime. 🏖️",
  "Why did the programmer love coffee? Because it was his favorite debugging tool. ☕",
  "Why did the programmer break the internet? He forgot to close a bracket. 💀",
];

const input = document.getElementById("input");
const askBtn = document.getElementById("ask");
const messages = document.getElementById("messages");

askBtn.addEventListener("click", () => {
  const question = input.value.toLowerCase().trim();

  if (question === "") {
    return;
  }

  const userMessage = document.createElement("p");
  userMessage.classList.add("user-message");
  userMessage.innerHTML = `<strong>You:</strong> ${question}`;
  messages.appendChild(userMessage);
  const response = document.createElement("p");
  response.classList.add("ai-message");
  response.textContent = getResponse(question);
  messages.appendChild(response);

  messages.scrollTop = messages.scrollHeight;

  input.value = "";
});

const getResponse = (question) => {
  question = question.replaceAll("real time", "real-time");

  // Calculator
  if (
    question.startsWith("calculate") ||
    !isNaN(question[0]) ||
    question.endsWith("calculate")
  ) {
    const expression = question.replace("calculate", "");
    const parts = expression.split(/([+\-*/^])/);

    const num1 = Number(parts[0]);
    const num2 = Number(parts[2]);

    switch (parts[1]) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;

      case "/":
        return num1 / num2;

      case "^":
        let result = 1;

        for (let i = 0; i < num2; i++) {
          result = result * num1;
        }

        return result;

      default:
        return "Sorry, I don't understand that calculation.";
    }
  }

  // Exact response
  if (responses[question]) {
    return responses[question];
  }

  // Exact keyword
  if (keywords[question]) {
    return responses[keywords[question]];
  }

  // Keyword scoring
  const score = {};

  for (const key in keywords) {
    if (question.split(" ").includes(key)) {
      const answer = keywords[key];

      score[answer] = (score[answer] || 0) + weights[key];
    }
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const answer in score) {
    if (score[answer] > bestScore) {
      bestMatch = answer;
      bestScore = score[answer];
    }
  }

  // Jokes
  if (question.includes("joke")) {
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  if (bestMatch) {
    return responses[bestMatch];
  }

  return "Sorry, I don't have an answer for that question.";
};

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    askBtn.click();
  }
});
