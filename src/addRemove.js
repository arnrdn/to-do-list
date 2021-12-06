import { render, tasks } from './renderTask.js';
import { save } from './localStorage.js';

const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');

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
  if (getTaskName === null || getTaskName === '');
  const task = createTask(getTaskName);
  newTaskInput.value = null;
  tasks.push(task);
  save();
  render();
}

export { newTaskForm, addTask };
