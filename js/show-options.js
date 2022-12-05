const optionButton = document.querySelectorAll('.titlebox__options');
const popUpOfOptions = document.querySelectorAll('.popup');
optionButton.forEach(currentOptionButton => currentOptionButton.addEventListener('click', showPopUp));
function showPopUp(event) {
    console.log('click')
    const currentPopUpArray = Array.from(popUpOfOptions)
    const id = event.target.dataset.id;
    const currentPopUp = currentPopUpArray.find(function (item){
        return item.dataset.id == id;
    })
    currentPopUp.classList.toggle('hidden')
    console.log(id)
    console.log(currentPopUp)
    console.log(currentPopUpArray)    
}
