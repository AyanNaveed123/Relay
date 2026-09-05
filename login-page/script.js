const registerForm = document.getElementById('registerForm');
const name = document.getElementById('name');
const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = name.value;
  const email = registerEmail.value;
  const password = registerPassword.value;

  fetch('/register', {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    }, 
    body: JSON.stringify({
      name: userName,
      email: email,
      password: password,
    })
  })

})
