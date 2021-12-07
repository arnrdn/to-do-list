const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskKey = 'tasks';

function save(tasks) {
  localStorage.setItem(taskKey, JSON.stringify(tasks));
}

export {
  tasks,
  taskKey,
  save,
};