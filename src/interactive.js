import { save, tasks } from './localStorage.js';
import { render } from './renderTask.js';

function checkCompleted(e) {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedTask = tasks.find((task) => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    save(tasks);
    render(tasks);
  }
}

function check() {
  const checkbox = document.querySelectorAll('input[type=checkbox]');
  checkbox.forEach((box) => {
    if (box.checked === true) {
      box.nextElementSibling.style.textDecoration = 'line-through';
    } else {
      box.nextElementSibling.style.textDecoration = 'none';
    }
  });
}

export {
  checkCompleted,
  check,
};