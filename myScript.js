let pass1;
let pass2;

const password1 = document.getElementById('password1');

const passwords_match = document.getElementById('passwords_match');

password1.addEventListener("input", (event) => {
  pass1 = password1.value;
})

const password2 = document.getElementById('password2');

password2.addEventListener("input", (event) => {
  pass2 = password2.value;
  passwordMatch(pass1, pass2);
})

const passwordMatch = (p1, p2) => {
  if (passwords_match.querySelector('.passwordsMatchMessage')) {
    let passwordsMatchMessage = passwords_match.querySelector('.passwordsMatchMessage');
    passwordsMatchMessage.parentNode.removeChild(passwordsMatchMessage);
  }
  
  if (p1 == p2) {
    const passwordsMatchMessage = document.createElement('div');
    passwordsMatchMessage.classList.add('passwordsMatchMessage');
    passwordsMatchMessage.textContent = 'Passwords match!';
    passwords_match.appendChild(passwordsMatchMessage);
    password2.setCustomValidity("");
  } else {
    const passwordsMatchMessage = document.createElement('div');
    passwordsMatchMessage.classList.add('passwordsMatchMessage');
    passwordsMatchMessage.textContent = "Passwords don't match!";
    passwords_match.appendChild(passwordsMatchMessage);
    password2.setCustomValidity("Passwords don't match!");
  }
}