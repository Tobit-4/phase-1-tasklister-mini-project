document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector('#create-task-form');
  const formInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const taskDescription = formInput.value

    if (taskDescription) {
    
      const newTask = document.createElement("li");
      newTask.textContent = taskDescription;

      taskList.appendChild(newTask);
      
      formInput.value = "";
    } else {
      
      alert("Please enter a task description!");
    }
  });
});
