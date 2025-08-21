const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from LocalStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => addTaskToDOM(task.text, task.completed));

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if(taskText !== ''){
    addTaskToDOM(taskText);
    tasks.push({text: taskText, completed:false});
    updateLocalStorage();
    taskInput.value='';
  }
});

function addTaskToDOM(text, completed=false){
  const li = document.createElement('li');
  li.textContent = text;
  if(completed) li.classList.add('completed');

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateTaskInStorage(text, li.classList.contains('completed'));
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
    deleteTaskFromStorage(text);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function updateLocalStorage(){
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInStorage(text, completed){
  tasks = tasks.map(t => t.text === text ? {...t, completed:completed} : t);
  updateLocalStorage();
}

function deleteTaskFromStorage(text){
  tasks = tasks.filter(t => t.text !== text);
  updateLocalStorage();
}
