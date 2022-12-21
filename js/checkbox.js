function switchCheckbox(event) {
    const id = event.target.dataset.id;

    const checked = event.target.checked;
    const currentElement = tasks.find(function (item) {
        return item.id == id;
    })
    console.log('currentelement', currentElement)
    if (checked === true) {
        currentElement.status = 'Active';
    } else currentElement.status = 'Inactive';
    taskContainer.innerHTML = '';
    renderTast(tasks)
}
