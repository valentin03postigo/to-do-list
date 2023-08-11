const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-list');
const taskInputName = document.getElementById('task-name');

addTask.addEventListener('click', function(){

    const task = document.createElement('div');
    task.style.display = 'flex';
    task.style.width = '100%';
    task.style.justifyContent = 'space-between';
    task.style.marginTop = '5px';

    const taskName = document.createElement('p');
    taskName.textContent = taskInputName.value;

    const taskCheck = document.createElement('input');
    taskCheck.type = 'checkbox';

    console.log(taskInputName.value);

    task.appendChild(taskName);
    task.appendChild(taskCheck);

    taskContainer.appendChild(task);

})