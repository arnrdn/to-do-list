import { render } from './renderTask.js';
import { save, tasks, removeFromStorage } from './localStorage.js';

const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const clearCompletedTasksButton = document.querySelector('[data-delete-completed-tasks]');

function createTask(name) {
  return {
    description: name,
    complete: false,
    id: Date.now().toString(),
  };
}

function addTask(e) {
  e.preventDefault();
  const getTaskName = newTaskInput.value;
  const task = createTask(getTaskName);
  newTaskInput.value = null;
  tasks.push(task);
  save(tasks);
  render(tasks);
}

function deleteTask(e) {
  const bucket = e.target;
  const pseudo = window.getComputedStyle(bucket, ':before');
  if (pseudo.getPropertyValue('color') === 'rgb(161, 161, 161)') {
    removeFromStorage(id);
  }
}

export {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
  deleteTask,
};
