const tasksContainer = document.querySelector('[data-tasks]');
const taskTemplate = document.getElementById('task-template');

const clearItem = (item) => {
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
};

const render = (tasks) => {
  clearItem(tasksContainer);
  tasks.forEach((task) => {
    const taskItem = document.importNode(taskTemplate.content, true);

    const checkbox = taskItem.querySelector('input');
    checkbox.id = task.id;
    checkbox.classList.add('custom-checkbox');
    checkbox.checked = task.complete;
    const textarea = taskItem.querySelector('textarea');
    textarea.append(task.description);
    const trashBtn = taskItem.querySelector('.delete');
    trashBtn.id = task.id;
    tasksContainer.appendChild(taskItem);
  });
};

const focus = (e) => {
  const clicked = e.target;
  if (clicked.tagName.toLowerCase() === 'li') {
    const clickedChild = clicked.children[1];
    clicked.classList.toggle('change');
    if (clicked.classList.contains('change')) {
      clicked.style.backgroundColor = '#fffec4';
      clickedChild.style.backgroundColor = '#fffec4';
    } else {
      clicked.style.backgroundColor = '#fff';
      clickedChild.style.backgroundColor = '#fff';
    }
  } else if (clicked.tagName.toLowerCase() === 'textarea') {
    const clickedParent = clicked.parentNode;
    clickedParent.classList.toggle('change');
    if (clickedParent.classList.contains('change')) {
      clickedParent.style.backgroundColor = '#fffec4';
      clicked.style.backgroundColor = '#fffec4';
    } else {
      clickedParent.style.backgroundColor = '#fff';
      clicked.style.backgroundColor = '#fff';
    }
  }
};

export { render, tasksContainer, focus };