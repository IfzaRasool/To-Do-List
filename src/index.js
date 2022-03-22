/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const tasklist = document.querySelector('.tasklist');

const tasks = [{
  description: 'Cook food',
  completed: false,
  index: 0,
},
{
  description: 'Go for grocery',
  completed: true,
  index: 1,
},
{
  description: 'Do some university work',
  completed: false,
  index: 0,
},
];

function displaytask() {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('INPUT');
    const label1 = document.createElement('LABEL');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'checkbox';
    label1.innerHTML = task.description;
    tasklist.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label1);
  });
}

displaytask();