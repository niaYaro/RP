// const cycle = document.getElementById('cycles');
const taskbox = document.getElementById('taskbox');
const newCecleButton = document.getElementById('new-cycle');

function createCycles() {
    newCecleButton.classList.remove('inactive');
}
function newTask() {
    tasks.push(Array.from(document.querySelectorAll('#task-form input')).reduce((acc, input) => ({...acc, [input.id]: input.value }), {}))
    newCecleButton.classList.add('inactive');
    taskContainer.innerHTML = '';
    renderTast(tasks)
}