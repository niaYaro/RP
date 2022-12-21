function addEventListenerToPopUp() {
    const optionButton = document.querySelectorAll('.titlebox__options');
    const popUpOfOptions = document.querySelectorAll('.popup');
    optionButton.forEach(currentOptionButton => currentOptionButton.addEventListener('click', showPopUp));
    function showPopUp(event) {
        const currentPopUpArray = Array.from(popUpOfOptions)
        const id = event.target.dataset.id;
        const currentPopUp = currentPopUpArray.find(function (item){
            return item.dataset.id == id;
        })
        currentPopUp.classList.toggle('hidden')
    }
    const listOfEditButtons = document.querySelectorAll('.edit-option');
    listOfEditButtons.forEach(currentEditButton => currentEditButton.addEventListener('click', editTask))
    const listOfEditBox = document.querySelectorAll('.edit');
    function editTask(event) {
        const id = event.target.dataset.id;
        const editBoxArray = Array.from(listOfEditBox)
        const currentBox = editBoxArray.find(function (item) {
            return id === item.dataset.id
        })
        currentBox.classList.toggle('hidden');
    }
    const changeDataButtons = document.querySelectorAll('.change__button');
    changeDataButtons.forEach(activeButton => activeButton.addEventListener('click', saveData));
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
const allDeleteButton = document.querySelectorAll('.delete-option');
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
}
