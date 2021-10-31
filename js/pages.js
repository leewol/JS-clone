//import {greeting, buttons} from "login.js";

const buttonFirst = buttons.firstElementChild;
const buttonLast = buttons.lastElementChild;

const CHOSEN_CLASSNAME = "chosen";
const NOTCHOSEN_CLASSNAME = "notchosen";

function chooseChange(btnOne, btnTwo) {
    if (btnOne.classList.contains(NOTCHOSEN_CLASSNAME)) {
        btnOne.classList.remove(NOTCHOSEN_CLASSNAME);
        btnOne.classList.add(CHOSEN_CLASSNAME);
        btnTwo.classList.remove(CHOSEN_CLASSNAME);
        btnTwo.classList.add(NOTCHOSEN_CLASSNAME);
    }
}

function greetingHide() {
    greeting.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(APPEAR_CLASSNAME);
    greeting.classList.add(DISAPPEAR_CLASSNAME);
}

function toDoHide() {
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(APPEAR_CLASSNAME);
    toDoForm.classList.add(DISAPPEAR_CLASSNAME);

    toDoList.classList.add(HIDDEN_CLASSNAME);
    toDoList.classList.remove(APPEAR_CLASSNAME);
    toDoList.classList.add(DISAPPEAR_CLASSNAME);
}

function onLastButtonClick (event) {
    chooseChange(buttonLast, buttonFirst); //버튼 class 바뀌기

    greetingHide();

    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(DISAPPEAR_CLASSNAME);
    toDoForm.classList.add(APPEAR_CLASSNAME);

    toDoList.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(DISAPPEAR_CLASSNAME);
    toDoList.classList.add(APPEAR_CLASSNAME);
}

function onFirstButtonClick (event) {
    chooseChange(buttonFirst, buttonLast); //버튼 class 바뀌기

    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.remove(DISAPPEAR_CLASSNAME);
    greeting.classList.add(APPEAR_CLASSNAME);

    toDoHide();
}

buttonLast.addEventListener("click", onLastButtonClick);
buttonFirst.addEventListener("click", onFirstButtonClick);