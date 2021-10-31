const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function hiddenInput() {
    if (toDos.length > 7) {
        toDoInput.classList.add(HIDDEN_CLASSNAME);
    } else {
        toDoInput.classList.remove(HIDDEN_CLASSNAME);
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement; //button의 부모에 접근 (li)
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    hiddenInput();
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = " ❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj); //적힌 todo들 저장
    hiddenInput();
    paintToDo(newTodoObj); //화면에 표시
    saveToDos(); //localstorage에 todo들 저장
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { //localStorage에 savedToDos가 존재하면
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //새로고침 전에 입력되었던 todo배열을 저장
    hiddenInput();
    parsedToDos.forEach(paintToDo);
}