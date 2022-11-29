const buttonGet = document.getElementById('button-get');
const buttonMore = document.getElementById('button-more');
buttonMore.disabled = true;
let breedsList = document.getElementById('breeds-list');
const firstPage = [];
async function renderPage() {
    const response = await fetch('https://catfact.ninja/breeds?limit=98');
    const breedsJson = await response.json();
    for (let i = 0; i < 10; i++) {
    }
    breedsJson.per_page = 10;
    let breed = breedsJson.data.breed;
    breedsList.innerHTML += `<p>${breed}</p>`;
    buttonGet.disabled = true;
    buttonMore.disabled = false;
    console.log(breedsList);
    console.log(breedsJson);
    function renderAnotherPage() {
        for (let i = 10; i < 20; i++) {
            let breed = breedsJson.data[i].breed;
            breedsList.innerHTML += `<p>${breed}</p>`;
        }
    }
    buttonMore.addEventListener('click',renderAnotherPage);
    }   
    // console.log(breedsList);
buttonGet.addEventListener('click',renderPage);




// let breedButton = document.querySelector('.breeds__wrapper-button');
// const firstBreed = document.querySelector('.first-breed');
// const secondBreed = document.querySelector('.second-breed');
// const thirdBreed = document.querySelector('.third-breed');
// const fourthBreed = document.querySelector('.fourth-breed');
// const fifthBreed = document.querySelector('.fifth-breed');
// let buttonMore = document.getElementById('button-more').disabled = true;
// async function renderfirstBreed() {
//     const response = await fetch('https://catfact.ninja/breeds?limit=98');
//     const currentBreed = await response.json();
//     // currentBreed.per_page = 10;
//         // const randomNumber = Math.floor(Math.random() * 98);
//         let buttonMore = document.getElementById('button-more').disabled = false;
//         let breedButton = document.querySelector('.breeds__wrapper-button').disabled = true;
//         for (let i = 0; i < 11; i++) {
//             let firstPage = currentBreed.data[i].breed;
//             console.log('breeds', firstPage)
//             firstBreed.innerHTML += `<div>${firstPage}</div>`;
//         }
        
//         console.log('json', currentBreed)
// }   
// breedButton.addEventListener('click', renderfirstBreed);
// async function renderSecondBreed() {
//     const response = await fetch('https://catfact.ninja/breeds');
//     const currentBreed = await response.json();
//     const randomNumber = Math.floor(Math.random() * 25)
//     secondBreed.innerHTML = `${currentBreed.data[randomNumber].breed}`;
// }   
// breedButton.addEventListener('click', renderSecondBreed);
// async function renderThirdBreed() {
//     const response = await fetch('https://catfact.ninja/breeds');
//     const currentBreed = await response.json();
//     const randomNumber = Math.floor(Math.random() * 25)
//     // breedTitle.innerHTML = '';
//     thirdBreed.innerHTML = `${currentBreed.data[randomNumber].breed}`;
// }   
// breedButton.addEventListener('click', renderThirdBreed);
// async function renderFourthBreed() {
//     const response = await fetch('https://catfact.ninja/breeds');
//     const currentBreed = await response.json();
//     const randomNumber = Math.floor(Math.random() * 25)
//     fourthBreed.innerHTML = `${currentBreed.data[randomNumber].breed}`;
// }   
// breedButton.addEventListener('click', renderFourthBreed);
// async function renderFifthBreed() {
//     const response = await fetch('https://catfact.ninja/breeds');
//     const currentBreed = await response.json();
//         const randomNumber = Math.floor(Math.random() * 25)
//         fifthBreed.innerHTML = `${currentBreed.data[randomNumber].breed}`;
//         }   
// breedButton.addEventListener('click', renderFifthBreed);

// use id 