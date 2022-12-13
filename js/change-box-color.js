const changeBoxColorButton = document.querySelector('.colorize__wrapper-button');
changeBoxColorButton.addEventListener('click', changeBoxColor);
const taskboxList = document.querySelectorAll('.main__taskbox');
function changeBoxColor() {
    const taskboxListArray = Array.from(taskboxList);
    const everyEvenBox = taskboxListArray.filter(function (box){
        return taskboxListArray.indexOf(box) % 2;
        }
    )
    for (let box of everyEvenBox ) {
        box.classList.toggle('color-changer');
    };
}