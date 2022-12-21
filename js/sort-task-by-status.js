const activeFilterBox = document.querySelector('.cycles__rigth-active');
const inactiveFilterBox = document.querySelector('.cycles__rigth-inactive');
activeFilterBox.addEventListener('click', filteredByActiveStatus)
inactiveFilterBox.addEventListener('click', filteredByInactiveStatus)
function filteredByActiveStatus() {
    const tasksWithActiveStatus = tasks.filter(function (task){
        return task.status === 'Active';
    })
    if (activeFilterBox.checked === true){
        inactiveFilterBox.disabled = true;
        taskContainer.innerHTML = '';
        renderTast(tasksWithActiveStatus);
    } else {
        inactiveFilterBox.disabled = false;
        taskContainer.innerHTML = '';
        renderTast(tasks);
    }
}
function filteredByInactiveStatus() {
    const tasksWithInactiveStatus = tasks.filter(function (task){
        return task.status === 'Inactive';
    })
    if (inactiveFilterBox.checked === true){
        activeFilterBox.disabled = true;
        taskContainer.innerHTML = '';
        renderTast(tasksWithInactiveStatus);
    } else {
        activeFilterBox.disabled = false;
        taskContainer.innerHTML = '';
        renderTast(tasks);
    }
}