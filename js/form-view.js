const formTemplate = document.getElementById('task-form');
console.log('form', customizeProperForm(newTask))

function customizeProperForm(condition) {
    if (condition === newTask) {
        return formTemplate;
    } else if (condition === editTask) {
        formTemplate.innerHTML = '';
        formTemplate.innerHTML +=
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
            </form>`
    }
}