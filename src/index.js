/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import _, { isEmpty, remove } from 'lodash';
import './style.css';
import Addtasks from './AddTask.js';
import removetasks from './RemoveTask.js';

const tasklist = document.querySelector('.tasklist');
const taskField = document.querySelector('.Taskfield');
const errorMsg = document.querySelector('.error');
const clearBtn = document.querySelector('.btn');
const taskDes = JSON.parse(localStorage.getItem('Taskdescription')) || [];

const displaytask = (taskDes) => {
  tasklist.innerHTML = ' ';
  if (taskDes) {
    taskDes.forEach((item, index) => {
      const li = document.createElement('li');
      const checkbox = document.createElement('INPUT');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.id = item.index;
      checkbox.className = 'checkboxclass';
      const label1 = document.createElement('INPUT');
      label1.setAttribute('type', 'text');
      label1.className = 'labelclass';
      const text = item.description;
      item.completed = 'false';
      label1.value = text;
      tasklist.appendChild(li);
      li.appendChild(checkbox);
      li.appendChild(label1);
    });
  }
};
displaytask(taskDes);

taskField.addEventListener('keyup', (e) => {
  e.stopImmediatePropagation();
  if (isEmpty(taskDes)) {
    Addtasks(e.target.value);
    e.target.value = '';
    displaytask(taskDes);
  } else if (e.keyCode === 13 || e.keyCode === 16 || e.keyName === 'Enter') {
    if (!isEmpty(taskField.value)) {
      Addtasks(e.target.value);
      e.target.value = '';
      displaytask(taskDes);
    } else {
      errorMsg.innerHTML = '*please write down the task';
    }
  }
});

export const checkboxes = document.querySelectorAll('.checkboxclass');
const labels = document.querySelectorAll('.labelclass');

for (let i = 0; i < labels.length; i += 1) {
  labels[i].addEventListener('keyup', (e) => {
    e.stopImmediatePropagation();
    taskDes.forEach((item, index) => {
      if (index === i) {
        item.description = labels[i].value;
        localStorage.setItem('Taskdescription', JSON.stringify(taskDes));
      }
    });
  });
}

for (let i = 0; i < checkboxes.length; i += 1) {
  checkboxes[i].addEventListener('change', (e) => {
    if (checkboxes[i].checked === true) {
      labels[i].style.textDecoration = 'line-through';
      taskDes.forEach((item, index) => {
        if (index === i) {
          item.completed = 'true';
          localStorage.setItem('Taskdescription', JSON.stringify(taskDes));
        }
      });
    } else {
      labels[i].style.textDecoration = 'none';
      taskDes.forEach((item, index) => {
        if (index === i) {
          item.completed = 'false';
          localStorage.setItem('Taskdescription', JSON.stringify(taskDes));
        }
      });
    }
  });
}

const Refreshpage = (e) => {
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked === true) {
      labels[i].style.textDecoration = 'line-through';
      taskDes.forEach((item, index) => {
        if (index === i) {
          item.completed = 'true';
          localStorage.setItem('Taskdescription', JSON.stringify(taskDes));
        }
      });
    } else {
      labels[i].style.textDecoration = 'none';
      taskDes.forEach((item, index) => {
        if (index === i) {
          item.completed = 'false';
          localStorage.setItem('Taskdescription', JSON.stringify(taskDes));
        }
      });
    }
  }
};
Refreshpage(taskDes);
clearBtn.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  removetasks();
  displaytask(taskDes);
});

export default { displaytask, Refreshpage };