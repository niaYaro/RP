const saveButton = document.querySelector('.storage__wrapper-button');
saveButton.addEventListener('click', saveDataInLocalStorage);
function saveDataInLocalStorage () {
    localStorage.setItem("allTasks", JSON.stringify(tasks))
}