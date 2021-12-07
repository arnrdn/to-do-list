import { save, tasks } from './localStorage.js';
import { render } from './renderTask.js';

export default function checkCompleted(e) {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedTask = tasks.find((task) => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    save(tasks);
    render(tasks);
  }
}
