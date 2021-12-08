import './style.css';
import { render, tasksContainer, focus } from './renderTask.js';
import {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
} from './addRemove.js';
import { checkCompleted } from './interactive.js';
import removeAllCheckedRender from './removeAll.js';
import { save, tasks } from './localStorage.js';

window.addEventListener('DOMContentLoaded', render(tasks));

newTaskForm.addEventListener('submit', addTask);

tasksContainer.addEventListener('change', checkCompleted);

tasksContainer.addEventListener('click', (e) => {
  focus(e);
});

const bucket = document.getElementsByClassName('delete');
const checkbox = document.getElementsByClassName('custom-checkbox')
const unorderedList = document.querySelector('[data-tasks]')
unorderedList.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'i') {
    tasks.forEach((task) => {
      console.log(task);
    })
  }

});

clearCompletedTasksButton.addEventListener('click', removeAllCheckedRender);
