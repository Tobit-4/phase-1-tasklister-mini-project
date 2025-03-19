document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
    const formInput = document.querySelector('#new-task-description');
    const taskList = document.querySelector('#tasks');

    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      
      formInput.textContent="Wash the dishes";
      
      const myTasks = document.createElement("li");
      myTasks.textContent="Wash the dishes";
      

      taskList.appendChild(myTasks)

    })
});


