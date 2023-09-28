// 1. DEFINIR LAS VARIABLES NECESARIAS.
const taskInput = document.querySelector('.input-text');
const addForm = document.querySelector('.add-form');
const tasksContainer = document.querySelector('.tasks-list');
const deleteAllBtn = document.querySelector('.deleteAll-btn');
let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

const saveLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

const renderTaskList = () => {
  tasksContainer.innerHTML = taskList.map((task) => createTask(task)).join('');
}

const addTask = (e) => {
  e.preventDefault();
  const taskName = taskInput.value.trim();

  // funcion que valide el input
  if(!isValidTask(taskName)) return;

  taskList = [...taskList, { name: taskName, id: Date.now() }];
  addForm.reset();
  renderTaskList();
  saveLocalStorage();
  toggleDelteAllButton();
}

const removeTask = (e) => {
  if (!e.target.classList.contains('delete-btn')) return;
  const filterId = Number(e.target.dataset.id);

  taskList = taskList.filter((task) => task.id !== filterId);
  renderTaskList();
  saveLocalStorage();
  toggleDelteAllButton();
}

const removeAll = () => {
  taskList = [];
  renderTaskList();
  saveLocalStorage();
  toggleDelteAllButton();
}

const toggleDelteAllButton = () => {
  if(!taskList.length){
    deleteAllBtn.classList.add('hidden');
    return;
  }
  deleteAllBtn.classList.remove('hidden');
}

const createTask = (task) => {
  const { name, id } = task;
  return `
    <li>  ${name}
      <img class="delete-btn" src="./img/delete.svg" alt="boton de borrar" data-id="${id}">
    </li>
  `
}

const isValidTask = (taskName) => {
  if (!taskName.length) {
    alert('Por favor, ingresá una tarea');
    return false; 
  }
  if(taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())) {
    alert('Ya existe una tarea con ese nombre');
    return false;
  }
  return true;
}

const init = () => {
  document.addEventListener('DOMContentLoaded', renderTaskList);
  addForm.addEventListener('submit', addTask);
  tasksContainer.addEventListener('click', removeTask);
  deleteAllBtn.addEventListener('click', removeAll);
  document.addEventListener('DOMContentLoaded', toggleDelteAllButton);
}

init();