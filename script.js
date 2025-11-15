const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const errorMsg = document.getElementById("errorMsg");
const taskList = document.getElementById("taskList");

const tasks = [];

function addTask(text) {
    const taskObj = {
        text: text,
        completed: false
    };
    tasks.push(taskObj);
    render();
    saveTasks();
}

function render() {
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        li.textContent = task.text;
        li.dataset.index = index;
        taskList.appendChild(li);
        li.addEventListener("click", toggleTask);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            const parentLi = event.target.closest("li");
            const index = parentLi.dataset.index;
            deleteTask(index);
        });
    })
}

function toggleTask(event) {
    const taskItem = event.target;
    const index = taskItem.dataset.index;
    tasks[index].completed = !tasks[index].completed;
    render();
    saveTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    render();
    saveTasks();
}

function saveTasks() {
const taskStorage = JSON.stringify(tasks);
localStorage.setItem("task", taskStorage);
}

function loadTasks() {
const taskStorage = localStorage.getItem("task");
const newTaskData = JSON.parse(taskStorage);
tasks.length = 0;
newTaskData.forEach(function(item) {
    tasks.push(item);
});
render();
}

taskForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const inputVal = taskInput.value.trim();
    if (inputVal === "") {
        errorMsg.textContent = "Please enter a task";
        return;
    }
    errorMsg.textContent = "";
    addTask(inputVal);
    taskInput.value = "";
    taskInput.focus();
}