const taskbox = document.getElementById('taskbox');
const newCecleButton = document.getElementById('new-cycle');

function createCycles() {
    newCecleButton.classList.remove('inactive');
}
function newTask() {
    tasks.push(Array.from(document.querySelectorAll('#task-form input')).
    reduce((acc, input) => ({...acc, [input.id]: input.value, [input.id]: input.value }), {}))
    newCecleButton.classList.add('inactive');
    console.log('tasks', tasks)
    console.log('array new task', Array.from(document.querySelectorAll('#task-form input')))
    taskContainer.innerHTML = '';
    addIdNumber();
    renderTast(tasks)
}