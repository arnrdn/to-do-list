import './style.css';
import { render, tasksContainer } from './renderTask.js';
import {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
} from './addRemove.js';
import checkCompleted from './interactive.js';
import removeAllCheckedRender from './removeAll.js';
import { tasks } from './localStorage.js';

window.addEventListener('DOMContentLoaded', render(tasks));

newTaskForm.addEventListener('submit', addTask);

tasksContainer.addEventListener('change', checkCompleted);

clearCompletedTasksButton.addEventListener('click', removeAllCheckedRender);