const taskKey = 'tasks';
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function save(tasks) {
  localStorage.setItem(taskKey, JSON.stringify(tasks));
}

function removeFromStorage(id) {
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
  removeFromStorage,
};