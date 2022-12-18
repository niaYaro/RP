const changeBoxColorButton = document.querySelector('.colorize__wrapper-button');
changeBoxColorButton.addEventListener('click', changeBoxColor);
const taskboxList = document.querySelectorAll('.main__taskbox');
console.log('taskbox list', taskboxList);
function changeBoxColor() {
    const taskboxListArray = Array.from(taskboxList);
    const everyEvenBox = taskboxListArray.filter(function (box){
        return taskboxListArray.indexOf(box) % 2;
    })
    console.log('click')
    // everyEvenBox.classLst.toggle('.hidden')
    for (let box of everyEvenBox ) {
        box.classList.toggle('color-changer')
    }
    // console.log(tasks)
    console.log(everyEvenBox)
    // taskContainer.innerHTML = '';
    // renderTast(tasks)
}