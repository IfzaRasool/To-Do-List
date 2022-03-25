const taskDes = JSON.parse(localStorage.getItem('Taskdescription')) || [];

const Addtasks = (text) => {
  const indexvalue = taskDes.length;
  const obj = {
    index: indexvalue,
    description: text,
    completed: false,
  };
  taskDes.push(obj);
  localStorage.setItem('Taskdescription', JSON.stringify(taskDes));
  window.location.reload();
};

export default Addtasks;