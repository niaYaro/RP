const changeButton = document.querySelector('.change__button');
console.log('button',changeButton)
function saveData (event) {
    const id = event.target.dataset.id;
    const elementForm = document.getElementById(`pc-form-${id}`);
    const dataFromForm = new FormData(elementForm);
    const newTitle =  dataFromForm.get('title');
    const newStartDate =  dataFromForm.get('start');
    const newEndDate =  dataFromForm.get('end');
    const editBoxArray = Array.from(listOfEditBox)
    const currentBox = editBoxArray.find(function (item) {
        return id === item.dataset.id
    })
    currentBox.classList.toggle('hidden');

    const activeTask = tasks.find(function (task) {
        return id == task.id;
    })
    activeTask.title = newTitle
    activeTask.startDate = newStartDate
    activeTask.endDate = newEndDate
    taskContainer.innerHTML = '';
    renderTast(tasks)
}