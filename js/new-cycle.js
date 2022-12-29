function generateAddTaskForm() {
    return `<div class="new-cycle__wrapper">
    <div class="new-cycle__wrapper-box">
        <div class="new-cycle__header">
            <p class="new-cycle__header-title">New Task</p>
            <div class="new-cycle__header-logo">
                <div class="logo__icon">+</div>
                <div class="logo__text">
                    <p class="logo__text-data">Uploading logo</p>
                    <p class="logo__text-req">jpg. jpeg. png. (max 5 mb)</p>
                </div>
            </div>
        </div>
        <form class="new-cycle__main" id="task-form">
            <div class="new-cycle__main-data">
                <label class="data__text">Task title<span class="necessary-data"> *</span></label>
                <input id="title" class="data__box" type="text" placeholder="Task title" required title="No russian language">
            </div>
            <div class="new-cycle__main-data">
                <label class="data__text">Date created</label>
                <input id="createdDate" class="data__box" type="date" placeholder="Date created">
            </div>
            <div class="new-cycle__main-data">
                <label class="data__text">Task start</label>
                <input id="startDate" class="data__box" type="month" placeholder="Timeframe">
            </div>
            <div class="new-cycle__main-data">
                <label class="data__text">Task end</label>
                <input id="endDate" class="data__box" type="month" placeholder="Timeframe">
            </div>
            <div class="new-cycle__main-data">
                <label class="data__text">Creator Name</label>
                <input id="creatorName" class="data__box" type="text" placeholder="Creator">
            </div>
            <div class="new-cycle__main-data">
                <label class="data__text">Creator Surname</label>
                <input id="creatorSurname" class="data__box" type="text" placeholder="Creator">
            </div>
            <div class="hidden">
                <label class="data__text"></label>
                <input id="status" class="data__box" type="text" placeholder="Status" value="Active">
            </div>
            <div class="hidden">
                <label class="data__text"></label>
                <input id="id-number" class="data__box" type="text" placeholder="Status" value=''>
            </div>
        </form>
        <div class="new-cycle__main-buttons">
            <button class="button-cancel buttom" type="reset">Cancel</button>
            <button class="button-create buttom" type="button" id="add-task-button" onclick="addTask()">Create Task</button>
        </div>
    </div>
</div>`;
}

const taskbox = document.getElementById('taskbox');
const newCycleButton = document.getElementById('new-cycle');
const addFormHTML = generateAddTaskForm();
newCycleButton.innerHTML = addFormHTML;

function createCycles() {
    newCycleButton.classList.remove('inactive');
    console.log('old title', newCycleButton)
}

// const addTaskButton = document.getElementById('add-task-button');
// addTaskButton.addEventListener('click', addTask);

function addTask() {
    const title = document.getElementById('title').value;
    const createdDate = document.getElementById('createdDate').value;
    const startData = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const creatorName = document.getElementById('creatorName').value;
    const creatorSurname = document.getElementById('creatorSurname').value;
    const status = document.getElementById('status').value;
    document.getElementById('id-number').value = Date.now();
    const id = document.getElementById('id-number').value;

    const newTaskObject = {
        title,
        createdDate,
        startData,
        endDate,
        creatorName,
        creatorSurname,
        status,
        id
    }

    

    newCycleButton.classList.add('inactive');

    tasks.push(newTaskObject);
    taskContainer.innerHTML = '';
    console.log(tasks);
    renderTast(tasks);
}


function newTask() {
    tasks.push(Array.from(document.querySelectorAll('#task-form input')).
    reduce((acc, input) => 
    {
        console.log('acc', acc);
        console.log('input.value', input.value)

        return {...acc, [input.id]: input.value, [input.id]: input.value }
    
    }, {}))

    newCycleButton.classList.add('inactive');
    console.log('array', Array.from(document.querySelectorAll('#task-form input')));
    ;
    taskContainer.innerHTML = '';
    addIdNumber();
    renderTast(tasks)
}