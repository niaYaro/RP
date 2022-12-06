const listOfEditButtons = document.querySelectorAll('.edit-option');
listOfEditButtons.forEach(currentEditButton => currentEditButton.addEventListener('click', editTask))
const listOfEditBox = document.querySelectorAll('.edit')
console.log('list', listOfEditButtons);
const body = document.getElementById('body')
function editTask(event) {
    const id = event.target.dataset.id;
    const editBoxArray = Array.from(listOfEditBox)
    const currentBox = editBoxArray.find(function (item) {
        return id === item.dataset.id
    })
    currentBox.classList.toggle('hidden')
    // body.classList.toggle('inactive-background')
    // console.log('click')
    // console.log(listOfEditBox)
    // console.log(id)
}