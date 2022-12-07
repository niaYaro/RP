const allDeleteButton = document.querySelectorAll('.delete-option');
const allTaskBox = document.querySelectorAll('.main__taskbox');
allDeleteButton.forEach(activeDeleteButton => activeDeleteButton.addEventListener('click', deleteTaskbox));
function deleteTaskbox (event) {
    const allTaskBoxArray = Array.from(allTaskBox);
    const id = event.target.dataset.id;
    const taskThatShouldBeDelete = allTaskBoxArray.find(function (item) {
        return id === item.dataset.id;
    })
    taskThatShouldBeDelete.classList.toggle('hidden')
}