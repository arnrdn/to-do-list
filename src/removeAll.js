import { save } from './localStorage.js';
import { render } from './renderTask.js';

export default function removeAllCheckedRender() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => !task.complete);
  save(tasks);
  render(tasks);
  document.location.reload();
}
