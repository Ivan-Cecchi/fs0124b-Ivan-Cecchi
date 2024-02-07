function addTask() {
    const tasksContainer = document.getElementById('tasks');
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      // Create the task element
      const taskEl = document.createElement('div');
      taskEl.classList.add('task');
      taskEl.innerText = taskText;
  
      // Create and add the delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.onclick = function() {
        tasksContainer.removeChild(taskEl);
      };
      taskEl.appendChild(deleteBtn);
  
      // Add the task to the list
      tasksContainer.appendChild(taskEl);
  
      // Clear the input
      taskInput.value = "";
    } else {
      alert("Please enter a task name.");
    }
  }
  