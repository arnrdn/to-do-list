import './style.css';
import { render, tasksContainer } from './renderTask.js';
import { newTaskForm, addTask } from './addRemove.js';
import checkCompleted from './interactive.js';

window.addEventListener('DOMContentLoaded', render);

newTaskForm.addEventListener('submit', addTask);

tasksContainer.addEventListener('change', checkCompleted);