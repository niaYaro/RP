// function taskbox() {
    let idNumber = 0;
    const tasks = [
        {
            title: 'Task 12345678910111213141516171819',
            status: 'wective',
            createdDate: 'Dec 8, 2022',
            startDate: 'Jan 2022',
            endDate: 'Jan 2022',
            creatorName: 'Bohdan',
            creatorSurname: 'Vitrovyi',
            icon: ``
        },
        {
            title: 'Liberate Kherson',
            status: 'Active',
            createdDate: 'Mar 10, 2022',
            startDate: 'Sep 2022',
            endDate: 'Nov 2022',
            creatorName: 'Valeriy',
            creatorSurname: 'Zaluzhnyi',
            icon: 'VZ'
        },
        {
            title: 'Visit Kherson',
            status: 'Active',
            createdDate: 'Nov 11, 2022',
            startDate: 'Nov 2022',
            endDate: 'Nov 2022',
            creatorName: 'Volodymyr',
            creatorSurname: 'Zelenskyi',
            icon: 'VZ'
        },
        {
            title: 'Damage the bridge',
            status: 'Active',
            createdDate: 'Jun 28, 2022',
            startDate: 'Oct 2022',
            endDate: 'Oct 2022',
            creatorName: 'Kyrylo',
            creatorSurname: 'Budanov',
            icon: 'KB'
        },
        {
            title: 'Liberate Crimea',
            status: 'Active',
            createdDate: 'Oct 14, 2022',
            startDate: 'Mar 2023',
            endDate: 'Apr 2023',
            creatorName: 'Valeriy',
            creatorSurname: 'Zaluzhnyi',
            icon: 'VZ'
        },
        {
            title: 'Liberate Donbas',
            status: 'Active',
            createdDate: 'Oct 14, 2022',
            startDate: 'Jan 2023',
            endDate: 'Apr 2023',
            creatorName: 'Valeriy',
            creatorSurname: 'Zaluzhnyi',
            icon: 'VZ'
        },
        {
            title: 'Burn Moscow',
            status: 'Active',
            createdDate: 'Aug 24, 2022',
            startDate: 'Jan 2023',
            endDate: 'Jul 2023',
            creatorName: 'Oleksiy',
            creatorSurname: 'Danilov',
            icon: 'OD'
        },
    ]
    const taskContainer = document.querySelector('.taskbox');
    function renderTast(tasks) {
        for (const task of tasks) {
            // console.log(task.target);
            // const taskName = task.title;
            // console.log(task);
            taskContainer.innerHTML +=
            `<aside class="main__taskbox">
            <div class="main__taskbox-progress">
                <div class="main__taskbox-progressline line line-one"></div>
                <div class="main__taskbox-progressline line line-two"></div>
                <div class="main__taskbox-progressline line line-three"></div>
                <div class="main__taskbox-progressline line line-four"></div>
                <div class="main__taskbox-progressline line line-five"></div>
            </div>
            <div class="main__taskbox-status">
                <label class="status__checkbox" >
                    <input class="status__checkbox-toggle" type="checkbox" onclick="switchCheckbox(event)" data-tasktitle="${task.title}" data-id="${task.id}">
                    <span class="status__checkbox-slider"></span>
                </label>
                <div class="status__description"><p class="description">${task.status}</p></div>
                
            </div>
            <div class="main__taskbox-titlebox">
                <div ><p class="titlebox__title">${task.title}</p></div>
                <div class="titlebox__options"><a href=""><img class="titlebox__options-icon" src="img/icon-dots-vertical.png" alt=""></a></div>
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
        </aside>`
        }
    }
    function addIdNumber() {
        tasks.forEach(object => {
            object.id = idNumber + 1;
            idNumber++;
        })
    }
    addIdNumber();
    console.log('tasks', tasks);
    renderTast(tasks);
// }
// taskbox();

