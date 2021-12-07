import './style.css';
import { render, tasksContainer, focus } from './renderTask.js';
import {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
} from './addRemove.js';
import { checkCompleted } from './interactive.js';
import removeAllCheckedRender from './removeAll.js';
import { tasks } from './localStorage.js';

window.addEventListener('DOMContentLoaded', render(tasks));

newTaskForm.addEventListener('submit', addTask);

tasksContainer.addEventListener('change', checkCompleted);

tasksContainer.addEventListener('click', focus);

clearCompletedTasksButton.addEventListener('click', removeAllCheckedRender);