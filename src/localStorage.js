const taskKey = 'tasks';
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const save = (tasks) => {
  localStorage.setItem(taskKey, JSON.stringify(tasks));
};

const removeFromStorage = (id) => {
  tasks.forEach((task, index) => {
    if (task.id === id) {
      tasks.split(index, 1);
    }
  });
};

export {
  tasks,
  taskKey,
  save,
  removeFromStorage,
};