const removetasks = () => {
  let taskDes = JSON.parse(localStorage.getItem('Taskdescription'));
  taskDes = taskDes.filter((item) => item.completed === 'false');
  taskDes.forEach((item, index) => {
    item.index = index;
  });
  localStorage.setItem('Taskdescription', JSON.stringify(taskDes));
  window.location.reload();
};

export default removetasks;