const saveButton = document.querySelector('.storage__wrapper-button');
saveButton.addEventListener('click', saveDataInLocalStorage);
function saveDataInLocalStorage () {
    localStorage.setItem("allTasks", JSON.stringify(tasks))
}
// const takeButton = document.querySelector('.storageback__wrapper-button');
// takeButton.addEventListener('click', takeDataInLocalStorage);
function takeDataInLocalStorage() {
    const savedData = JSON.parse(window.localStorage.getItem('allTasks'));
    tasks = savedData;

    if (tasks && tasks.length > 0) {
        taskContainer.innerHTML = '';
        renderTast(tasks);
    }
}
takeDataInLocalStorage()