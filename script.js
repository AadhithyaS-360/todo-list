function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();
  if (task !== "") {
    let li = document.createElement("li");

    let dot = document.createElement("span");
    dot.className = "dot";

    let span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = function() {
      li.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
      li.remove();
    };

    li.appendChild(dot);
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}
