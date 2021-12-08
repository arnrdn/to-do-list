import './style.css';
import { render, tasksContainer, focus } from './renderTask.js';
import {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
} from './addRemove.js';
import { checkCompleted } from './interactive.js';
import removeAllCheckedRender from './removeAll.js';
import { tasks, save } from './localStorage.js';

window.addEventListener('DOMContentLoaded', render(tasks));

newTaskForm.addEventListener('submit', addTask);

tasksContainer.addEventListener('change', checkCompleted);

tasksContainer.addEventListener('click', (e) => {
  focus(e);
});

clearCompletedTasksButton.addEventListener('click', removeAllCheckedRender);

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
    }
  });
});