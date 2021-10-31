const logout = document.querySelector("#logout");

function onLogoutSubmit (event) {
    event.preventDefault();
    
    localStorage.removeItem(USERNAME_KEY);
    let savedUsername;

    toDoHide();
    greetingHide();
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(DISAPPEAR_CLASSNAME);
    loginForm.classList.add(APPEAR_CLASSNAME);

    buttons.classList.add(HIDDEN_CLASSNAME);
    buttons.classList.remove(APPEAR_CLASSNAME);
}

logout.addEventListener("click", onLogoutSubmit);