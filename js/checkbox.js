// function switchCheckbox() {
//     const title = task.target.dataset.tasktitle;
//     console.log('title', title);
//     console.log(tasks);
// }

function switchCheckbox(event) {
    // This is id of the Planning cycle where click is happened
    const id = event.target.dataset.id;
    console.log('id - ', id);

    // This is value of the checkbox
    const checked = event.target.checked;
    console.log('checked - ', checked);
    const currentElement = tasks.find(function (item) {
        return item.id == id;
    })
    console.log('task object - ', currentElement);
    console.log('task status - ', currentElement.status);
    if (checked === true) {
        currentElement.status = 'Active';
    } else currentElement.status = 'Inactive';
    console.log('tasks - ', tasks);
    taskContainer.innerHTML = '';
    renderTast(tasks)
}
