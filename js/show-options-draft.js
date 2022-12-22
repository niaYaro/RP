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
    
    function editTask(event) {
        const listOfEditBox = document.querySelector('.edit');
        const id = event.target.dataset.id;
        listOfEditBox.classList.toggle('hidden');
        const editBox = document.getElementById('edit-box');
            const editTask = tasks.find(function (task) {
                return id == task.id
            })
            editBox.innerHTML += 
            `<form 
            class="edit__box" 
            id="pc-form"
            >
            <div class="edit__box-title" data-id="${editTask.id}">
                <input 
                class="title__edit" 
                name="title" 
                type="text" 
                placeholder="New title" 
                data-id="${editTask.id}"
                value="${editTask.title}">
            </div>
            <div class="edit__box-timeframe">
                <div class="timeframe">
                    <input 
                        class="timeframe__start" 
                        name="start" 
                        data-id="${editTask.id}" 
                        type="month" 
                        placeholder="New title" 
                        value="${editTask.startDate}"
                    >
                </div>
                <div class="timeframe">
                    <input 
                        class="timeframe__end" 
                        name="end" 
                        data-id="${editTask.id}" 
                        type="month" 
                        placeholder="New title" 
                        value="${editTask.endDate}"
                    >
                </div>
            </div>
            <div class="edit__box-created" title="Data are not changeable">
                <p class="created__title">Date created:</p> 
                <p class="created__date">${editTask.createdDate}</p>
            </div>
            <div class="edit__box-creator" title="Data are not changeable">
                <p class="creator__title">Creator name:</p> 
                <p class="creator__date">${editTask.creatorName} ${editTask.creatorSurname}</p>
            </div>
            <div class="edit__box-button" id="button-box">
                <button class="change__button" data-id="${editTask.id}" type="button">Save changes</button>
            </div>
            </form>`;
            const changeDataButton = document.querySelector('.change__button');
            changeDataButton.addEventListener('click', saveData);
            
            function saveData (event) {
                const id = event.target.dataset.id;
                const dataFromForm = new FormData(document.getElementById('pc-form'));
                const newTitle = dataFromForm.get('title');
                const newStartDate = dataFromForm.get('start');
                const newEndDate = dataFromForm.get('end');
                const activeTask = tasks.find(function (task) {
                    return id == task.id;
                })
                listOfEditBox.classList.toggle('hidden');
                activeTask.title = newTitle;
                activeTask.startDate = newStartDate;
                activeTask.endDate = newEndDate;
                taskContainer.innerHTML = '';
                renderTast(tasks);
        }
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
