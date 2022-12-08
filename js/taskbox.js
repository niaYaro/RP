    let idNumber = 0;
    
    let tasks = [
        {
            title: 'Task 12345678910111213141516171819',
            status: 'Inactive',
            createdDate: 'Dec 8, 2022',
            startDate: '2022-06',
            endDate: '2023-01',
            creatorName: 'Bohdan',
            creatorSurname: 'Vitrovyi'
        },
        {
            title: 'Liberate Kherson',
            status: 'Inactive',
            createdDate: 'Mar 10, 2022',
            startDate: '2022-09',
            endDate: '2022-11',
            creatorName: 'Valeriy',
            creatorSurname: 'Zaluzhnyi'
        },
        {
            title: 'Visit Kherson',
            status: 'Inactive',
            createdDate: 'Nov 11, 2022',
            startDate: '2022-11',
            endDate: '2022-11',
            creatorName: 'Volodymyr',
            creatorSurname: 'Zelenskyi'
        },
        {
            title: 'Damage the bridge',
            status: 'Inactive',
            createdDate: 'Jun 28, 2022',
            startDate: '2022-10',
            endDate: '2022-10',
            creatorName: 'Kyrylo',
            creatorSurname: 'Budanov'
        },
        {
            title: 'Liberate Donbas',
            status: 'Inactive',
            createdDate: 'Oct 14, 2022',
            startDate: '2023-01',
            endDate: '2023-04',
            creatorName: 'Valeriy',
            creatorSurname: 'Zaluzhnyi'
        },
        {
            title: 'Burn Moscow',
            status: 'Inactive',
            createdDate: 'Aug 24, 2022',
            startDate: '2023-01',
            endDate: '2023-07',
            creatorName: 'Oleksiy',
            creatorSurname: 'Danilov'
        },
    ]
    console.log(localStorage)
    // console.log(tasks)
    // console.log(JSON.stringify(tasks))
    const taskContainer = document.querySelector('.taskbox');
    function renderTast(tasks) {
        for (const task of tasks) {
            let isCheckboxCHecked ='';
            if (task.status === 'Active') {
                isCheckboxCHecked ='checked';
            } else {isCheckboxCHecked ='';
            }
            taskContainer.innerHTML +=
            `<aside class="main__taskbox" data-id="${task.id}">
            <div class="main__taskbox-progress">
                <div class="main__taskbox-progressline line line-one"></div>
                <div class="main__taskbox-progressline line line-two"></div>
                <div class="main__taskbox-progressline line line-three"></div>
                <div class="main__taskbox-progressline line line-four"></div>
                <div class="main__taskbox-progressline line line-five"></div>
            </div>
            <div class="main__taskbox-status">
                <label class="status__checkbox" >
                    <input 
                    class="status__checkbox-toggle" 
                    type="checkbox" 
                    onclick="switchCheckbox(event)" 
                    data-tasktitle="${task.title}" 
                    data-id="${task.id}"
                    ${isCheckboxCHecked}>
                    <span class="status__checkbox-slider"></span>
                </label>
                <div class="status__description"><p class="description">${task.status}</p></div>
                
            </div>
            <div class="main__taskbox-titlebox">
                <div ><p class="titlebox__title">${task.title}</p></div>
                <div class="titlebox__options" data-id="${task.id}"><a ><img class="titlebox__options-icon" src="img/icon-dots-vertical.png" alt="" data-id="${task.id}"></a></div>
                <div class="popup hidden" data-id="${task.id}">
                    <li class="popup__option">
                        <div class="popup__option-wrapper edit-option">
                            <img class="popup__option-icon" src="img/icon-edit.png" alt="">
                            <ul class="popup__option-title" data-id="${task.id}">Edit</ul>
                        </div>
                        <div class="popup__option-wrapper delete-option">
                            <img class="popup__option-icon" src="img/icon-delete.png" alt="">
                            <ul class="popup__option-title" data-id="${task.id}">Delete</ul>
                        </div>
                    </li>
                </div>
            </div>
            <div class="main__taskbox-details">
                <div class="details__timeframe">
                    <div class="details__timeframe-title">Timeframe</div>
                    <div class="details__timeframe-data">${task.startDate} - ${task.endDate}</div>
                </div>
                <div class="details__date">
                    <div class="details__date-title">Date created</div>
                    <div class="details__date-data">${task.createdDate}</div>
                </div>
                <div class="details__creator">
                    <div class="details__creator-title">Creator</div>
                    <div class="details__creator-data">
                        <div class="details__creator-icon">${task.creatorName[0]}${task.creatorSurname[0]}</div>
                        <div class="details__creator-name">${task.creatorName} ${task.creatorSurname}</div>
                    </div>
                </div>
            </div>
            <div class="main__taskbox-bottom">
                <a class="bottom__edit" href=""><div class="bottom__edit-button bottom">Edit</div></a>
                <a class="bottom__progress" href=""><div class="bottom__progress-button bottom">Hiring Progress</div></a>
            </div>
        </aside>
        <section class="edit hidden" data-id="${task.id}">
        <div class="edit__box">
            <div class="edit__box-title" data-id="${task.id}">
                <input class="title__edit" type="text" placeholder="New title" value="${task.title}">
            </div>
            <div class="edit__box-timeframe">
                <div class="timeframe"><input class="timeframe__start" data-id="${task.id}" type="month" placeholder="New title" value="${task.startDate}"></div>
                <div class="timeframe"><input class="timeframe__end" data-id="${task.id}" type="month" placeholder="New title" value="${task.endDate}"></div>
            </div>
            <div class="edit__box-created" title="Data are not changeable">
                <p class="created__title">Date created:</p> 
                <p class="created__date">${task.createdDate}</p>
            </div>
            <div class="edit__box-creator" title="Data are not changeable">
                <p class="creator__title">Creator name:</p> 
                <p class="creator__date">${task.creatorName} ${task.creatorSurname}</p>
            </div>
            <div class="edit__box-button">
                <button class="change__button" data-id="${task.id}">Save changes</button>
            </div>
        </div>
    </section>`
        }

    }
    function addIdNumber() {
        tasks.forEach(object => {
            object.id = idNumber + 1;
            idNumber++;
        })
    }
    addIdNumber();
    renderTast(tasks);

