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
    tasks.forEach(function(task, index){
        const li = document.createElement("li");
        li.textContent = task.text;
        li.dataset.index = index;
        taskList.appendChild(li);
        li.addEventListener("click", toggleTask);
    })
}

function toggleTask(event) {
const taskItem  = event.target;
}

function deleteTask(index) {

}

function saveTasks() {

}

function loadTasks() {

}

taskForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
event.preventDefault();
const inputVal = taskInput.value.trim();
 if (inputVal === ""){
    errorMsg.textContent = "Please enter a task";
    return;
 } 
 errorMsg.textContent = "";
 addTask(inputVal);
 taskInput.value = "";
 taskInput.focus();
}