// function switchCheckbox() {
//     const title = task.target.dataset.tasktitle;
//     console.log('title', title);
//     console.log(tasks);
// }

const tasksStatuses = document.querySelectorAll('.description');
function switchCheckbox(event) {
    // This is id of the Planning cycle where click is happened
    const id = event.target.dataset.id;
    console.log('id - ', id);

    // This is value of the checkbox
    const checked = event.target.checked;
    console.log('checked - ', checked);
}
// const tasksStatuses = document.querySelectorAll('.description');
// function switchCheckbox() {
//     for (let i = 0; i < tasksStatuses.length; i++) {
//         console.log(tasksStatuses);
//         if (tasksStatuses[i].innerHTML === 'Inactive') {
//             tasksStatuses[i].innerHTML = 'Active'
//             } else tasksStatuses[i].innerHTML = 'Inactive'
//     }
// }
// (function() {

//     const tasksStatuses = document.querySelector('.description');
//     const toggle = document.querySelector('.status__checkbox-slider');
//     toggle.addEventListener('click', switcher);
//     function switcher() {
//         if (tasksStatuses[i].innerHTML === 'Inactive') {
//             tasksStatuses[i].innerHTML = 'Active'
//             } else tasksStatuses[i].innerHTML = 'Inactive'
//     }
// })()