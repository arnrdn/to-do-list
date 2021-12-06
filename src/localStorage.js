const tasks = JSON.parse(localStorage.getItem('task.list')) || [];
const taskKey = 'task.list';

function save() {
  localStorage.setItem(taskKey, JSON.stringify(tasks));
}

export { tasks, taskKey, save };