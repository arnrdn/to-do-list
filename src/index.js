import './style.css';
import { render, tasksContainer, focus } from './renderTask.js';
import {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
  deleteItem,
} from './addRemove.js';
import { checkCompleted } from './interactive.js';
import removeAllCheckedRender from './removeAll.js';
import { tasks } from './localStorage.js';

newTaskForm.addEventListener('submit', addTask);

tasksContainer.addEventListener('change', checkCompleted);

tasksContainer.addEventListener('click', (e) => {
  focus(e);
});

clearCompletedTasksButton.addEventListener('click', removeAllCheckedRender);

window.addEventListener('DOMContentLoaded', () => {
  render(tasks);
  deleteItem();
  addTask();
  removeAllCheckedRender();
});