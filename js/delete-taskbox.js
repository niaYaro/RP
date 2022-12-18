const allDeleteButton = document.querySelectorAll('.delete-option');
const allTaskBox = document.querySelectorAll('.main__taskbox');
allDeleteButton.forEach(activeDeleteButton => activeDeleteButton.addEventListener('click', deleteTaskbox));
function deleteTaskbox (event) {
    const id = event.target.dataset.id;
    const deletedTask = tasks.find(function (task) {
        return id == task.id;
    })
    const indexOfDeletingTask = tasks.indexOf(deletedTask);
    tasks.splice(indexOfDeletingTask, 1)
    taskContainer.innerHTML = '';
    renderTast(tasks)
}