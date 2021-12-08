import './style.css';
import { render, tasksContainer, focus } from './renderTask.js';
import {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
} from './addRemove.js';
import { checkCompleted } from './interactive.js';
import removeAllCheckedRender from './removeAll.js';
import { save, tasks, removeFromStorage } from './localStorage.js';

window.addEventListener('DOMContentLoaded', render(tasks));

newTaskForm.addEventListener('submit', addTask);

tasksContainer.addEventListener('change', checkCompleted);

tasksContainer.addEventListener('click', (e) => {
  focus(e);
});

const bucket = document.querySelector('.delete');
bucket.addEventListener('click', () => {
  const checkId = document.querySelector('.custom-checkbox');
  console.log(bucket.id)
});

clearCompletedTasksButton.addEventListener('click', removeAllCheckedRender);
