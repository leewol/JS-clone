const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const buttons = document.querySelector("#buttons");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const APPEAR_CLASSNAME = "appear";
const DISAPPEAR_CLASSNAME = "disappear";

function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(DISAPPEAR_CLASSNAME);
    loginForm.classList.remove(APPEAR_CLASSNAME);

    greeting.classList.add(APPEAR_CLASSNAME);

    chooseChange(buttonFirst, buttonLast);
    buttons.classList.add(APPEAR_CLASSNAME);

    logout.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username) {
    const now = new Date().getHours();

    if (now >= 6 && now < 12) {
        greeting.innerText = `Good Morning, ${username}!`;
    } else if (now >= 12 && now < 18) {
        greeting.innerText = `Good Afternoon, ${username}!`;
    } else {
        greeting.innerText = `Good Evening, ${username}!`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.remove(DISAPPEAR_CLASSNAME);
    buttons.classList.remove(HIDDEN_CLASSNAME);
}

let savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);   
}

//export { greeting, buttons };