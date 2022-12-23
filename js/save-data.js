const saveButton = document.querySelector('.storage__wrapper-button');
saveButton.addEventListener('click', saveDataInLocalStorage);

function saveDataInLocalStorage () {
    localStorage.setItem("allTasks", JSON.stringify(tasks))
}

function takeDataInLocalStorage() {
    const savedData = JSON.parse(localStorage.getItem('allTasks'));
    tasks = savedData;
    if (tasks && tasks.length > 0) {
        taskContainer.innerHTML = '';
        renderTast(tasks);
    }
}
takeDataInLocalStorage()