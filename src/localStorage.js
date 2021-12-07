const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskKey = 'tasks';

function save(tasks) {
  localStorage.setItem(taskKey, JSON.stringify(tasks));
}

function removeTask(id) {
  tasks.forEach((task, index) => {
    if (task.id === id) {
      tasks.split(index, 1);
    }
  });
}

export {
  tasks,
  taskKey,
  save,
  removeTask
};