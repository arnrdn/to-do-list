import { render } from './renderTask.js';
import { save, tasks } from './localStorage.js';

const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const clearCompletedTasksButton = document.querySelector('[data-delete-completed-tasks]');

const createTask = (name) => ({
  description: name,
  complete: false,
  id: Date.now().toString(),
});

const addTask = (e) => {
  e.preventDefault();
  const getTaskName = newTaskInput.value;
  const task = createTask(getTaskName);
  newTaskInput.value = null;
  tasks.push(task);
  save(tasks);
  render(tasks);
  document.location.reload();
};

const deleteItem = () => {
  const listItems = document.querySelectorAll('li');
  listItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      const deleteBtn = e.target;
      if (deleteBtn.classList[0] === 'far') {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter((task) => task !== tasks[index]);
        item.remove();
        save(tasks);
        render(tasks);
        document.location.reload();
      }
    });
  });
};

const editItem = () => {
  const itemValue = document.querySelectorAll('textarea');
  itemValue.forEach((item, index) => {
    item.addEventListener('keyup', () => {
      tasks[index].description = item.value;
      save(tasks);
    });
  });
};

export {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
  deleteItem,
  editItem,
};
