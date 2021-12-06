const tasksContainer = document.querySelector('[data-tasks]');

const tasks = [
  {
    name: 'adopt a cat',
    complete: false,
    id: 1,
  },
  {
    name: 'pat a cat',
    complete: false,
    id: 2,
  },
  {
    name: 'feed a cat',
    complete: false,
    id: 3,
  },
  {
    name: 'just a cat',
    complete: false,
    id: 4,
  },
];

export default function render() {
  tasks.forEach((task) => {
    const taskListItem = document.createElement('li');
    taskListItem.innerHTML = `<div class="to-do-item">
      <input type="checkbox" name="to-do" id="to-do" class="to-do">
      <label for="to-do">${task.name}</label>
    </div>
    <div class="more">
      <div class="more-dot"></div>
      <div class="more-dot"></div>
      <div class="more-dot"></div>
    </div>`;
    tasksContainer.appendChild(taskListItem);
  });
}