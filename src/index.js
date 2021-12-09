import './style.css';
import { render, tasksContainer, focus } from './renderTask.js';
import {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
  deleteItem,
  editItem,
} from './addRemove.js';
import { checkCompleted, check } from './interactive.js';
import removeAllCheckedRender from './removeAll.js';
import { tasks } from './localStorage.js';

newTaskForm.addEventListener('submit', addTask);

tasksContainer.addEventListener('change', (e) => {
  checkCompleted(e);
  check();
});

tasksContainer.addEventListener('click', focus);

editItem();

clearCompletedTasksButton.addEventListener('click', removeAllCheckedRender);

window.addEventListener('DOMContentLoaded', () => {
  render(tasks);
  deleteItem();
  editItem();
});