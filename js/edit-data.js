// const inputTitleList = document.querySelectorAll('.edit__box-title');
// const inputStartDateList = document.querySelectorAll('.timeframe__start');
// const inputEndDateList = document.querySelectorAll('.timeframe__end');
// const changeDataButtons = document.querySelectorAll('.change__button');
// changeDataButtons.forEach(activeButton => activeButton.addEventListener('click', saveData));
// function saveData (event) {
//     const id = event.target.dataset.id;
//     const inputStartDatetListArray = Array.from(inputStartDateList);
//     const activeStartDate = inputStartDatetListArray.find(function (item) {
//         return id === item.dataset.id;
//     })
//     const newStartDate = activeStartDate.value;
//     const inputEndDatetListArray = Array.from(inputEndDateList);
//     const activeEndDate = inputEndDatetListArray.find(function (item) {
//         return id === item.dataset.id;
//     })
//     const newEndDate = activeEndDate.value;
//     const inputListArray = Array.from(inputTitleList);
//     const activeTitle = inputListArray.find(function (item) {
//         return id === item.dataset.id;
//     })
//     const newTitle = activeTitle.childNodes[1].value;
//     const activeTask = tasks.find(function (task) {
//         return id == task.id;
//     })
//     activeTask.title = newTitle
//     activeTask.startDate = newStartDate
//     activeTask.endDate = newEndDate
//     taskContainer.innerHTML = '';
//     renderTast(tasks)
// }
