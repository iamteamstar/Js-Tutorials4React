const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Boş görev eklenemez!");
        return;
    }

    tasks.push(taskText);
    input.value = "";

    renderTasks();
});

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        li.innerText = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Sil";

        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}