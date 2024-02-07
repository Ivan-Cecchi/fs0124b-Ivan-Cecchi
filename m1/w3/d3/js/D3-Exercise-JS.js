function addTask() {
    const tasksContainer = document.getElementById('tasks');
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      
      const taskEl = document.createElement('div');
      taskEl.classList.add('task');
      taskEl.innerText = taskText;
  
   
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.onclick = function() {
        tasksContainer.removeChild(taskEl);
      };
      taskEl.appendChild(deleteBtn);
  
     
      tasksContainer.appendChild(taskEl);
  
      
      taskInput.value = "";
    } else {
      alert("Please enter a task name.");
    }
  }
  