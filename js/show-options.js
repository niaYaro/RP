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
    // const body = document.getElementById('body')
    function editTask(event) {
        const id = event.target.dataset.id;
        const editBoxArray = Array.from(listOfEditBox)
        const currentBox = editBoxArray.find(function (item) {
            return id === item.dataset.id
        })
        currentBox.classList.toggle('hidden');
    }
    const inputTitleList = document.querySelectorAll('.edit__box-title');
const inputStartDateList = document.querySelectorAll('.timeframe__start');
const inputEndDateList = document.querySelectorAll('.timeframe__end');
const changeDataButtons = document.querySelectorAll('.change__button');
changeDataButtons.forEach(activeButton => activeButton.addEventListener('click', saveData));
function saveData (event) {
    const id = event.target.dataset.id;
    const inputStartDatetListArray = Array.from(inputStartDateList);
    const activeStartDate = inputStartDatetListArray.find(function (item) {
        return id === item.dataset.id;
    })
    const newStartDate = activeStartDate.value;
    const inputEndDatetListArray = Array.from(inputEndDateList);
    const activeEndDate = inputEndDatetListArray.find(function (item) {
        return id === item.dataset.id;
    })
    const newEndDate = activeEndDate.value;
    const inputListArray = Array.from(inputTitleList);
    const activeTitle = inputListArray.find(function (item) {
        return id === item.dataset.id;
    })
    const newTitle = activeTitle.childNodes[1].value;
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
}
