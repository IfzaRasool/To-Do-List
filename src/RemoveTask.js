/* eslint-disable import/no-cycle */
import { checkboxes } from './index.js';

const taskDes = JSON.parse(localStorage.getItem('Taskdescription')) || [];

const removetasks = (e) => {
  e.stopImmediatePropagation();
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked === true) {
      taskDes.splice(i, 1);
      taskDes.forEach((item, index) => {
        item.index = index;
      });
      localStorage.setItem('Taskdescription', JSON.stringify(taskDes));
      window.location.reload();
    }
  }
};

export default removetasks;