document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("clearAllBtn").addEventListener("click", clearAllTasks);
document.getElementById("clearSelectedBtn").addEventListener("click", deleteSelectedTasks);
document.getElementById("addTaskTabBtn").addEventListener("click", showAddTaskTab);
document.getElementById("viewTaskTabBtn").addEventListener("click", showViewTaskTab);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    // Create task list item
    const li = document.createElement("li");

    // Task content
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    // Task actions (checkbox and delete button)
    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", markCompleted);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteTask);

    taskActions.appendChild(checkbox);
    taskActions.appendChild(deleteBtn);
    li.appendChild(taskContent);
    li.appendChild(taskActions);

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input after adding
  }
}

function markCompleted(event) {
  const taskItem = event.target.closest('li');
  taskItem.classList.toggle("completed", event.target.checked);
}

function deleteTask(event) {
  const taskItem = event.target.closest('li');
  taskItem.remove();
}

function deleteSelectedTasks() {
  const taskList = document.getElementById("taskList");
  const checkboxes = taskList.querySelectorAll("input[type='checkbox']:checked");

  checkboxes.forEach(checkbox => {
    const taskItem = checkbox.closest('li');
    taskItem.remove();
  });
}

function clearAllTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear all tasks
}

function showAddTaskTab() {
  document.getElementById("addTaskTabContent").style.display = "block";
  document.getElementById("viewTaskTabContent").style.display = "none";
  document.getElementById("addTaskTabBtn").classList.add("active");
  document.getElementById("viewTaskTabBtn").classList.remove("active");
}

function showViewTaskTab() {
  document.getElementById("viewTaskTabContent").style.display = "block";
  document.getElementById("addTaskTabContent").style.display = "none";
  document.getElementById("viewTaskTabBtn").classList.add("active");
  document.getElementById("addTaskTabBtn").classList.remove("active");
}
